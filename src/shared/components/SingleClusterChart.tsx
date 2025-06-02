import React, { useRef, useEffect } from "react";

type SingleClusterChartProps = {
  values: number[];
};

const SingleClusterChart: React.FC<SingleClusterChartProps> = ({ values }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || values.length === 0) return;

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

    // Dibujar ejes
    ctx.beginPath();
    ctx.strokeStyle = "#e5e7eb";
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    ctx.fillStyle = "#6b7280";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Índice", width / 2, height - 10);
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Valor", 0, 0);
    ctx.restore();

    // Normalización
    const minX = 0;
    const maxX = values.length - 1;
    const minY = Math.min(...values);
    const maxY = Math.max(...values);
    const normalize = (val: number, min: number, max: number) =>
      max === min ? 0.5 : (val - min) / (max - min);

    // Dibujar puntos
    values.forEach((val, idx) => {
      const normX = normalize(idx, minX, maxX);
      const normY = normalize(val, minY, maxY);

      const x = padding + normX * plotWidth;
      const y = height - padding - normY * plotHeight;

      ctx.beginPath();
      ctx.fillStyle = "#3b82f6"; // azul
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Calcular centroide (promedio)
    const centroidX = values.length / 2;
    const centroidY = values.reduce((sum, val) => sum + val, 0) / values.length;

    const normCentroidX = normalize(centroidX, minX, maxX);
    const normCentroidY = normalize(centroidY, minY, maxY);
    const cx = padding + normCentroidX * plotWidth;
    const cy = height - padding - normCentroidY * plotHeight;

    ctx.beginPath();
    ctx.fillStyle = "#ef4444"; // rojo
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [values]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SingleClusterChart;
