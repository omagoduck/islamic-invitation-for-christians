import { contentParts } from './content';

export async function getContent(partId: string): Promise<string> {
  const part = contentParts.find(p => p.id === partId);
  if (!part) return '';

  try {
    const response = await fetch(`/content/${part.file}`);
    if (!response.ok) return '';
    return await response.text();
  } catch (error) {
    console.error('Error loading content:', error);
    return '';
  }
}

export { contentParts };
