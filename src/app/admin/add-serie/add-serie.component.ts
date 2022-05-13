import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {
  serieForm!:FormGroup
  imagePreview:any
  constructor(private fb:FormBuilder, private serieService:SerieService) { }

  ngOnInit(): void {

  this.serieForm = this.fb.group({
    img : [''],
    nameFilm : [''],
    dateAired : [''],
    genre : [''],
    description : [''],
  })
  }


  onImageSelected(event: any) {
    let file: any = event.target.files[0];
    this.serieForm.patchValue({ img: file });
    this.serieForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  addSerie(x:any){
this.serieService.addSerie(x,this.serieForm.value.img).subscribe(
  (data)=>{

  }
)
  }
}
