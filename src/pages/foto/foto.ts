import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the FotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {
  fotos: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
    this.fotos.push(
      {img: 'https://loremflickr.com/320/240/man'},
      {img: 'https://loremflickr.com/320/240'},
      // {img: 'https://via.placeholder.com/175x175'},
      // {img: 'https://via.placeholder.com/175x200'},
      // {img: 'https://via.placeholder.com/500x200'},
      // {img: 'https://via.placeholder.com/300x200'},
      // {img: 'https://via.placeholder.com/150x300'},
      // {img: 'https://via.placeholder.com/175x175'},
      // {img: 'https://via.placeholder.com/150x300'},
      // {img: 'https://via.placeholder.com/175x200'},
      // {img: 'https://via.placeholder.com/300x200'},
      // {img: 'https://via.placeholder.com/500x200'},
    );
  }

  capturaFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.fotos.push({img:base64Image});
      console.log(this.fotos);
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
