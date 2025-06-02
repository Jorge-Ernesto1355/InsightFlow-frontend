import React, { useEffect, useRef, useState } from "react";
import { Card, Tooltip } from "antd";
import { InfoCircle } from "iconoir-react";

type CentroidChartProps = {
  mockData: any;
};

type Centroid = {
  x: number;
  y: number;
  cluster: number;
  color: string;
};

const colors = [
  "#10b981", // verde
  "#ef4444", // rojo
  "#f59e0b", // ámbar
  "#3b82f6", // azul
  "#8b5cf6", // púrpura
  "#ec4899", // rosa
];

const CentroidsDistribution: React.FC<CentroidChartProps> = ({ mockData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tooltipData, setTooltipData] = useState<{
    cluster: number;
    x: number;
    y: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const centroids: Centroid[] = (mockData?.data?.centroids || []).map(
    (coords: number[], idx: number) => {
      return {
        x: coords[0], // PacienteID
        y: coords[1], // Edad
        cluster: idx,
        color: colors[idx % colors.length],
      };
    }
  );

  const clusterSizes = mockData?.data?.clusters || {};

  const normalize = (val: number, min: number, max: number) => {
    if (max === min) return 0.5;
    return (val - min) / (max - min);
  };

  useEffect(() => {
    if (!canvasRef.current || centroids.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const width = rect.width;
    const height = rect.height;
    const padding = 40;
    const plotWidth = width - padding * 2;
    const plotHeight = height - padding * 2;

    ctx.clearRect(0, 0, width, height);

    // Ejes
    ctx.beginPath();
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 1;
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Etiquetas
    ctx.fillStyle = "#6b7280";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PacienteID", width / 2, height - 10);
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Edad", 0, 0);
    ctx.restore();

    const xVals = centroids.map((c) => c.x);
    const yVals = centroids.map((c) => c.y);
    const minX = Math.min(...xVals);
    const maxX = Math.max(...xVals);
    const minY = Math.min(...yVals);
    const maxY = Math.max(...yVals);

    // Dibujar puntos simulados por clúster
    const allPoints: { x: number; y: number; color: string }[] = [];

    centroids.forEach((centroid) => {
      const normX = normalize(centroid.x, minX, maxX);
      const normY = normalize(centroid.y, minY, maxY);
      const size = clusterSizes[centroid.cluster] || 10;

      for (let i = 0; i < size; i++) {
        const offsetX = (Math.random() - 0.5) * 0.15;
        const offsetY = (Math.random() - 0.5) * 0.15;

        allPoints.push({
          x: normX + offsetX,
          y: normY + offsetY,
          color: centroid.color,
        });
      }
    });

    allPoints.forEach((point) => {
      const x = padding + point.x * plotWidth;
      const y = height - padding - point.y * plotHeight;

      ctx.beginPath();
      ctx.fillStyle = point.color + "80";
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // Dibujar centroides
    centroids.forEach((centroid) => {
      const normX = normalize(centroid.x, minX, maxX);
      const normY = normalize(centroid.y, minY, maxY);

      const x = padding + normX * plotWidth;
      const y = height - padding - normY * plotHeight;

      ctx.beginPath();
      ctx.fillStyle = centroid.color;
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = "#fff";

      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(centroid.cluster.toString(), x, y);
    });

    // Mouse hover para tooltips
    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let found = null;

      centroids.forEach((centroid) => {
        const normX = normalize(centroid.x, minX, maxX);
        const normY = normalize(centroid.y, minY, maxY);
        const x = padding + normX * plotWidth;
        const y = height - padding - normY * plotHeight;
        const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
        if (dist < 8) {
          found = { cluster: centroid.cluster, x: centroid.x, y: centroid.y };
          setTooltipPosition({ x: e.clientX, y: e.clientY });
        }
      });

      setTooltipData(found);
      if (!found) setTooltipPosition({ x: 0, y: 0 });
    };
  }, [mockData]);

  return (
    <Card className="h-full flex flex-col rounded-lg shadow border-gray-200">
      <h3 className="font-inter  font-bold text-2xl">Clusters Distribution</h3>
      <div className="flex justify-start items-center">
        <span className="font-inter text-gray-600 font-medium">
          Visualization of centroids and the distribution of datos per cluster
        </span>
        <Tooltip
          color="white"
          trigger={"click"}
          title={
            <>
              <h5 className="font-inter font-bold text-gray-700  ">
                What is a Centroid?
              </h5>
              <span className="text-black font-inter">
                Un centroide es el "centro matemático" de un grupo de datos,
                normalmente en un algoritmo de agrupamiento como k-means.
              </span>
            </>
          }
        >
          <InfoCircle color="gray" className="ml-2 cursor-pointer" />
        </Tooltip>
      </div>
      <div style={{ position: "relative", width: "100%", height: 320 }}>
        <Tooltip
          color="white"
          open={!!tooltipData}
          title={
            tooltipData && (
              <div className="text-gray-600 font-inter text-sm">
                <div>
                  <strong>Clúster:</strong> {tooltipData.cluster}
                </div>
                <div>
                  <strong>PacienteID:</strong> {tooltipData.x.toFixed(2)}
                </div>
                <div>
                  <strong>Edad:</strong> {tooltipData.y.toFixed(2)}
                </div>
              </div>
            )
          }
          overlayStyle={{
            position: "fixed",
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y + 10,
          }}
        >
          <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </Tooltip>
      </div>
    </Card>
  );
};

export default CentroidsDistribution;
