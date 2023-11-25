import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Split the string into words
    const words = value.toLowerCase().split('_');

    // Capitalize each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back together
    return capitalizedWords.join(' ');
  }

}
