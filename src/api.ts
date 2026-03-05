import axios from 'axios';

const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || '';
const normalizedApiBaseUrl = configuredApiBaseUrl.replace(/\/+$/, '');

const api = axios.create({
  baseURL: normalizedApiBaseUrl || '/api',
});

export default api;

const absoluteApiBase = normalizedApiBaseUrl || '';

export function resolveAssetUrl(url?: string | null): string {
  if (!url) return '';
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }

  const normalizedPath = url.startsWith('/') ? url : `/${url}`;
  if (!absoluteApiBase) return normalizedPath;

  try {
    const apiUrl = new URL(absoluteApiBase);
    const apiPath = apiUrl.pathname.replace(/\/+$/, '');
    if (apiPath.endsWith('/api')) {
      apiUrl.pathname = normalizedPath;
    } else {
      apiUrl.pathname = normalizedPath;
    }
    apiUrl.search = '';
    apiUrl.hash = '';
    return apiUrl.toString();
  } catch {
    return normalizedPath;
  }
}

export interface HeroData {
  title: string;
  subtitle: string;
  tagline: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface AboutData {
  whoWeAre: string;
  whyAtlasia: string;
  approach: string;
  vision: string;
  mission: string;
}

export interface PhaseData {
  _id?: string;
  title: string;
  duration: string;
  description: string;
  order: number;
}

export interface RoleData {
  _id?: string;
  roleName: string;
  description: string;
  responsibilities: string[];
  registerLink: string;
  order: number;
}

export interface HighlightData {
  _id?: string;
  title: string;
  description: string;
  order: number;
}

export interface CTAData {
  heading: string;
  buttonText: string;
  buttonLink: string;
}

export interface CarouselData {
  _id?: string;
  imageUrl: string;
  title: string;
  description: string;
}

export interface TestimonialData {
  _id?: string;
  imageUrl: string;
  name: string;
  role: string;
  quote: string;
  order: number;
}

export interface BootcampMediaData {
  _id?: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  title: string;
  description: string;
  order: number;
}
