import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output, OnDestroy, OnChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from './note.service';
import {isNullOrUndefined} from 'util';
import {Notes} from './notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  note: Notes = new Notes('', '');
  constructor(private noteService: NoteService) {}
  notes: Array<any>;
  // @Input() elementId: string;
  // @Input() value: any = '';
  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onEditorKeyup: EventEmitter<any> = new EventEmitter<any>();

  // didSetValue = false;


  ngOnInit() {
    this.noteService.getAll().subscribe(data => {
      this.notes = data;
    });
    // quill.register('modules/counter', function(quill, options) {
    //   var container = document.querySelector('#counter');
    //   quill.on('text-change', function() {
    //     var text = quill.getText();
    //     quill.setContent('hello world');
    //     container.innerHTML = text.split(/\s+/).length;
    //   });
    // });

    // console.log(document.querySelector('#editor'));

    // We can now initialize Quill with something like this:
    // var quill = new quill('#editor', {
    //   modules: {
    //     counter: true
    //   }
    // });
}
// ngAfterViewInit() {
//   tinymce.init({
//     selector: '#' + this.elementId,
//     plugins: ['link', 'paste', 'table'],
//     setup: editor => {
//       this.editor = editor;
//       editor.on('keyup', () => {
//         const content = editor.getContent();
//         this.onEditorKeyup.emit(content);
//       });
//     },
//   });
// }
  onSubmit() {
  }
  onItemClick(note: any): void {
    const title: any = note.title;
    const description: string = note.note;
    console.log('Checking passed item: ', title);
    ((document.getElementById('lbl') as HTMLInputElement).value) = title;
  }
  // ngOnDestroy() {
  //   tinymce.remove(this.editor);
  // }
  // ngOnChanges() {

  //   console.log(this.value);

  //   if (!isNullOrUndefined(this.editor) && this.value !== '' && !this.didSetValue) {
  //     console.log(this.value);
  //     this.didSetValue = true;
  //     this.editor.setContent(this.value);

  //   }
  // }


}
