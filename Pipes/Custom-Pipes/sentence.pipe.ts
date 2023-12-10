import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name: "sentence"
})
export class SentencePipe implements PipeTransform
{
   transform(sentence:string)
   {
      var firstChar = sentence.charAt(0);
      var restChars = sentence.substring(1);
      var sentence = firstChar.toLocaleUpperCase() + restChars.toLocaleLowerCase();
      return sentence;
   }
}