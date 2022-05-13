import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm!: FormGroup
  imagePreview: any
  videoPreview: any
  url: any
  format: any
  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      nameFilm: [''],
      dateAired: [''],
      genre: [''],
      score: [''],
      duration: [''],
      quality: [''],
      description :[''],
      img: [''],
      vid: ['']




    })


  }


  addMovie(x: any) {
    this.movieService.addMovie(x, this.movieForm.value.vid, this.movieForm.value.img).subscribe();
    console.log('here', this.movieForm.value.img);
    console.log('here', this.movieForm.value.vid);
    // location.reload()
  }


  onImageSelected(event: any) {
    let file: any = event.target.files[0];
    this.movieForm.patchValue({ img: file });
    this.movieForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  onVideoSelected(event: any) {
    let file: any = event.target.files[0];


    this.movieForm.patchValue({ vid: file });
    console.log('alo', file);

    this.movieForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.videoPreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  // onSelectFile(event:any) {
  //   let file = event.target.files[0];
  //   this.movieForm.patchValue({ video: file });
  //   this.movieForm.updateValueAndValidity();
  //   if (file) {
  //     const reader = new FileReader();
  //     if(file.type.indexOf('image')> -1){
  //       this.format = 'image';
  //     } else if(file.type.indexOf('video')> -1){
  //       this.format = 'video';
  //     }
  //     reader.onload = (event) => {
  //       this.url = (<FileReader>event.target).result;
  //     }
  //     reader.readAsDataURL(file);

  //   }




  // }
}
