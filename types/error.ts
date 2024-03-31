interface HydraError {
  "@context"?: string;
  "@type"?: string;
  "hydra:title": string;
  "hydra:description": string;
  trace?: any;
}

interface ValidatorError {
  title?: string;
  detail?: string;
}

export interface ErrorResponse extends HydraError, ValidatorError {
  code?: string;
  message?: string;
}
