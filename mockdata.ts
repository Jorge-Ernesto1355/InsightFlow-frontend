export const mockData = {
    "status": "success",
    "message": "Analysis completed successfully",
    "data": {
      "clusters": {
        "0": 7,
        "1": 4,
        "2": 4
      },
      "centroids": [
        [
          -0.6943650748294135,
          -0.5820299402077097,
          0.4285714285714286,
          0.4285714285714286,
          1.4285714285714286,
          0.28571428571428575,
          1.1428571428571428,
          0.28571428571428575
        ],
        [
          5.551115123125783e-17,
          1.2850239342537695,
          0.5,
          1,
          0.25,
          1,
          1.25,
          1
        ],
        [
          1.2151388809514738,
          -0.26647153889027664,
          0.75,
          0.25,
          1.75,
          0.25,
          0.5,
          0.25
        ]
      ],
      "feature_importance": {
        "PacienteID": 0.28644852192073816,
        "Edad": 0.30626232408011034,
        "Sexo": 0.008735074685641213,
        "Fuma": 0.04706510390323103,
        "ConsumoAlcohol": 0.19125902334083084,
        "HistorialFamiliarCancer": 0.0548875588455963,
        "NivelActividadFisica": 0.05045483437825598,
        "DiagnosticoCancer": 0.0548875588455963
      },
      "silhouette_score": 0.22292921248532546,
      "sample_count": 15,
      "feature_count": 9,
      "features_used": [
        "PacienteID",
        "Edad",
        "Sexo",
        "Fuma",
        "ConsumoAlcohol",
        "HistorialFamiliarCancer",
        "NivelActividadFisica",
        "DiagnosticoCancer"
      ],
      "cluster_summaries": [
        {
          "cluster_id": 0,
          "size": 7,
          "categorical_modes": {
            "Sexo": "F",
            "Fuma": "No",
            "ConsumoAlcohol": "Bajo",
            "HistorialFamiliarCancer": "No",
            "NivelActividadFisica": "Medio",
            "DiagnosticoCancer": "No"
          },
          "feature_means": {
            "PacienteID": -0.6943650748294135,
            "Edad": -0.5820299402077097
          }
        },
        {
          "cluster_id": 1,
          "size": 4,
          "categorical_modes": {
            "Sexo": "F",
            "Fuma": "Si",
            "ConsumoAlcohol": "Alto",
            "HistorialFamiliarCancer": "Si",
            "NivelActividadFisica": "Bajo",
            "DiagnosticoCancer": "Si"
          },
          "feature_means": {
            "PacienteID": 5.551115123125783e-17,
            "Edad": 1.2850239342537693
          }
        },
        {
          "cluster_id": 2,
          "size": 4,
          "categorical_modes": {
            "Sexo": "M",
            "Fuma": "No",
            "ConsumoAlcohol": "Moderado",
            "HistorialFamiliarCancer": "No",
            "NivelActividadFisica": "Alto",
            "DiagnosticoCancer": "No"
          },
          "feature_means": {
            "PacienteID": 1.2151388809514738,
            "Edad": -0.26647153889027664
          }
        }
      ],
      "metadata": {
        "original_row_count": 15,
        "original_col_count": 8,
        "dropped_columns": [],
        "imputed_values": {},
        "categorical_mappings": {
          "Sexo": {
            "0": "F",
            "1": "M"
          },
          "Fuma": {
            "0": "No",
            "1": "Si"
          },
          "ConsumoAlcohol": {
            "0": "Alto",
            "1": "Bajo",
            "2": "Moderado"
          },
          "HistorialFamiliarCancer": {
            "0": "No",
            "1": "Si"
          },
          "NivelActividadFisica": {
            "0": "Alto",
            "1": "Bajo",
            "2": "Medio"
          },
          "DiagnosticoCancer": {
            "0": "No",
            "1": "Si"
          }
        },
        "final_row_count": 15,
        "final_col_count": 8,
        "numeric_columns": [
          "PacienteID",
          "Edad"
        ],
        "categorical_columns": [
          "Sexo",
          "Fuma",
          "ConsumoAlcohol",
          "HistorialFamiliarCancer",
          "NivelActividadFisica",
          "DiagnosticoCancer"
        ]
      }
    },
    "processing_time_ms": 665,
    "errors": null
  }