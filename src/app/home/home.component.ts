import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import{weatherService} from '../services/weatherservice.service';
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import{isoCountries} from '../services/countries';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  countryCode;
  codes=isoCountries;
  lat;
  long;
  population;
  countryName;
  cityName;
  feedbackForm: FormGroup;
  domCity:string;
  domCountry:string;
  cityNames=[];
  countriesNames=[];
 dates=[];
 temp=[];
 pressure=[];
 humidity=[];
 main=[];
 icons=[];
 wind=[];
  List:any;
  weatherData:any;
  selectedCountry="";
  selectedCity="";
 city=false;
  
  constructor(private fb: FormBuilder,private weatherservice:weatherService,  @Inject('BaseURL') private BaseURL) {
    this.createForm();
 
   
   }
   
  countries:object;
  ngOnInit() {
  this.weatherservice.getCountries().subscribe(res=>{return this.FilterCountries(res)});
  
  }
  getCities()
  {
   this.cityNames=this.List[this.selectedCountry];
   console.log(this.cityNames);
   this.city=true;
  }
  FilterCountries(res)
  {
   console.log(res.Albania);
     this.countriesNames=Object.getOwnPropertyNames(res)
     this.List=res;
   
}
getDates(dates,length)
{

}


  createForm(){
    this.feedbackForm=this.fb.group({
city:'',
country:'',
    });

  }

Filterdata(res){
  this.countryCode=res.city.country;
  let index,date, todayDate,time;
  this.domCity=this.selectedCity;
  this.domCountry=this.selectedCountry;
  this.lat=res.city.coord.lat;
  this.long=res.city.coord.lon;
  this.population=res.city.population;
  todayDate=res.list[0].dt_txt;
  this.dates.push(todayDate);
  this.temp.push(res.list[0].main.temp);
  this.wind.push(res.list[0].wind.speed);
  this.pressure.push(res.list[0].main.pressure);
  this.icons.push(res.list[0].weather[0].icon);
  this.main.push(res.list[0].weather[0].main);
  this.humidity.push(res.list[0].main.humidity);
  this.countryName=this.getCountryName(res.city.country)
  this.cityName=res.city.name;
  date=new Date(todayDate)
time=date.getHours();
  index=10-time/3;
for(var i=index;i<res.list.length;i+=8)
{
  this.dates.push(res.list[i].dt_txt);
  this.temp.push(res.list[i].main.temp);
  this.pressure.push(res.list[i].main.pressure);
  this.icons.push(res.list[i].weather[0].icon);
  this.main.push(res.list[i].weather[0].main);  
  this.wind.push(res.list[i].wind.speed);
  this.humidity.push(res.list[i].main.humidity);
}

}
getCountryName (countryCode) {
  if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
  } else {
      return countryCode;
  }
}

onSubmit()
{
 const city=this.feedbackForm.value.city;
console.log(this.dates);
console.log(this.main);
console.log(this.temp);
console.log(this.pressure);
console.log(this.icons);
console.log(this.wind);
 this.weatherservice.getData(city).subscribe(res=>{ return this.Filterdata(res)});

 this.feedbackForm.reset({
  selectedCity: '',
  selectedCountry: '',
 });
 this.dates=[];
 this.temp=[];
 this.pressure=[];
 this.humidity=[];
 this.main=[];
 this.icons=[];
 this.wind=[];
this.city=false;
}
 
}
