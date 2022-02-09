export const descriptionLimit = (description: string): string => description.split(' ').splice(0, 20).join(' ') + '...';
