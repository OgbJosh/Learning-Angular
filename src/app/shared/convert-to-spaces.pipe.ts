
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'convertToSpace'
})

export class ConvertToSpacesPipe {
  transform(value: string, character: string): string {
    return value.replace(character, ' ')
  }
}