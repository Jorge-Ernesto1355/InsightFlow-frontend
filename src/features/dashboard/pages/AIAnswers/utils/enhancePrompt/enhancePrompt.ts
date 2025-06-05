import { GeneralClusteringData } from "./types";

export const createFlexibleClusteringContext = (clusteringData: GeneralClusteringData): string => {
    if (!clusteringData) return "";
    
    let context = "\n\n=== CLUSTERING ANALYSIS DATA ===\n";
    context += "You are analyzing clustering data with the following information:\n\n";
    
    // Cluster Overview
    context += "CLUSTER OVERVIEW:\n";
    Object.entries(clusteringData.clusters).forEach(([clusterId, size]) => {
      context += `- Cluster ${clusterId}: ${size} items\n`;
    });
    context += `- Total Clusters: ${Object.keys(clusteringData.clusters).length}\n`;
    context += `- Total Items: ${Object.values(clusteringData.clusters).reduce((a, b) => a + b, 0)}\n\n`;

    // Centroids (if available)
    if (clusteringData.centroids && clusteringData.centroids.length > 0) {
      context += "CLUSTER CENTROIDS:\n";
      clusteringData.centroids.forEach((centroid, index) => {
        context += `- Cluster ${index}: [${centroid.map(val => val.toFixed(3)).join(', ')}]\n`;
      });
      context += "\n";
    }

    // Detailed Cluster Analysis
    context += "DETAILED CLUSTER ANALYSIS:\n";
    clusteringData.cluster_summaries.forEach((cluster, index) => {
      context += `\nCluster ${cluster.cluster_id || index}:\n`;
      
      // Handle size
      if (cluster.size) {
        context += `- Size: ${cluster.size} items\n`;
      }
      
      // Handle any scoring/ranking fields dynamically
      Object.entries(cluster).forEach(([key, value]) => {
        if (key.toLowerCase().includes('score') || key.toLowerCase().includes('level') || key.toLowerCase().includes('rank')) {
          if (typeof value === 'number') {
            context += `- ${key}: ${value.toFixed(3)}\n`;
          } else {
            context += `- ${key}: ${value}\n`;
          }
        }
      });
      
      // Handle feature means/averages
      if (cluster.feature_means) {
        context += `- Feature Averages:\n`;
        Object.entries(cluster.feature_means).forEach(([feature, value]: [string, any]) => {
          if (typeof value === 'number') {
            context += `  * ${feature}: ${value.toFixed(3)}\n`;
          } else {
            context += `  * ${feature}: ${value}\n`;
          }
        });
      }
      
      // Handle any risk/importance factors dynamically
      const factorKeys = Object.keys(cluster).filter(key => 
        key.toLowerCase().includes('factor') || 
        key.toLowerCase().includes('risk') || 
        key.toLowerCase().includes('importance') ||
        key.toLowerCase().includes('weight')
      );
      
      factorKeys.forEach(factorKey => {
        const factors = cluster[factorKey];
        if (typeof factors === 'object' && factors !== null) {
          context += `- ${factorKey.replace(/_/g, ' ').toUpperCase()}:\n`;
          Object.entries(factors).forEach(([factor, details]: [string, any]) => {
            if (typeof details === 'object' && details !== null) {
              let factorInfo = `  * ${factor}: `;
              if (details.value !== undefined) factorInfo += `value=${typeof details.value === 'number' ? details.value.toFixed(3) : details.value}`;
              if (details.contribution !== undefined) factorInfo += `, contribution=${(details.contribution * 100).toFixed(1)}%`;
              if (details.level !== undefined) factorInfo += `, level=${details.level}`;
              if (details.risk_level !== undefined) factorInfo += `, risk=${details.risk_level}`;
              if (details.z_score !== undefined) factorInfo += `, z-score=${details.z_score.toFixed(2)}`;
              context += factorInfo + "\n";
            }
          });
        }
      });
      
      // Handle categorical modes
      if (cluster.categorical_modes && Object.keys(cluster.categorical_modes).length > 0) {
        context += `- Most Common Categories:\n`;
        Object.entries(cluster.categorical_modes).forEach(([category, mode]) => {
          context += `  * ${category}: ${mode}\n`;
        });
      }
    });

    // Metadata Information
    if (clusteringData.metadata) {
      context += "\nDATASET INFORMATION:\n";
      if (clusteringData.metadata.numeric_columns) {
        context += `- Numeric Features: ${clusteringData.metadata.numeric_columns.join(', ')}\n`;
      }
      if (clusteringData.metadata.categorical_columns) {
        context += `- Categorical Features: ${clusteringData.metadata.categorical_columns.join(', ')}\n`;
      }
      
      // Handle any other metadata
      Object.entries(clusteringData.metadata).forEach(([key, value]) => {
        if (!['numeric_columns', 'categorical_columns', 'column_stats'].includes(key)) {
          context += `- ${key.replace(/_/g, ' ')}: ${JSON.stringify(value)}\n`;
        }
      });
    }

    context += "\n=== END CLUSTERING DATA ===\n\n";
    return context;
  };


 // Enhanced system prompt for flexible data analysis
 export const createSystemPrompt = (): string => {
    return `You are an intelligent clustering data analysis assistant capable of analyzing any type of clustered dataset.
    
Key capabilities:
- Analyze clustering patterns and characteristics across any domain
- Compare different clusters based on their features and metrics
- Identify key differentiators between clusters
- Provide insights about cluster composition and behavior
- Answer questions about cluster similarities and differences
- Make predictions about which cluster new data points might belong to
- Explain clustering results in clear, understandable terms

Guidelines:
- Always base your answers on the provided clustering data context
- Reference specific cluster IDs, sizes, and feature values when possible
- Compare clusters using quantitative metrics when available
- Explain the significance of centroids, scores, and factor contributions
- If the data appears domain-specific (medical, business, etc.), adapt your language accordingly
- Be precise about statistical measures and their interpretations
- Suggest actionable insights based on clustering patterns
- Acknowledge limitations when data is incomplete or unclear

Remember: The clustering data can be from any domain - medical, business, customer segmentation, 
scientific research, etc. Adapt your analysis and terminology to match the context of the data.`;
  };


