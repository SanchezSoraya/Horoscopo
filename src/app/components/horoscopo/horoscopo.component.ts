import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { InfoMonth } from '../../interfaces/InfoMonth.interface';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  horoscopos:InfoMonth[] = [
   
    { month: "Capricornio: cocodrilo", urlImage: "../../../assets/img/capricornio.jpg", description:"Cuando fija la mirada o el diente a una presa, los cocodrilos no se rinden hasta conseguirlo. Para los regidos por este signo, nada puede sacudir su determinación para conseguir lo que quieren. Son pacientes y asertivos, y esperan el momento oportuno para lograr lo que desea. Igualmente, se ven feroces, pero sorprenden con sus habilidades ocultas." },
    { month: "Acuario: araña", urlImage: "../../../assets/img/acuario.jpg", description:"Las arañas representan paciencia, creatividad y la batalla entre la oscuridad y la luz. Por ello, los regidos por Acuario pueden pasar mucho tiempo construyendo algo, pero a veces prefieren trabajar solos. Al igual que hay arañas amigas, también hay arañas muy territoriales. Acepta tanto el lado positivo como el negativo de sí mismo, en todo lo que hace.." },
    { month: "Piscis: ciervo", urlImage: "../../../assets/img/piscis.jpg", description:"Como los ciervos, los regidos por Piscis son compasivos, tranquilos y abiertos. Una de las principales cosas que valoran en la vida es poder encontrar su tribu y rodearse de personas de ideas afines. También son sensibles y tímidos como los ciervos. No responden bien a personas u opiniones que son duras, ofensivas o vulgares. Las personas cercanas a los regidos por Piscis saben que deben acercarse a ellos en silencio y con calma para que no se alejen." },
    { month: "Aries: guepardo", urlImage: "../../../assets/img/aries.jpg", description:"Las personas regidas por Aries están llenas de energía que exige ser liberada y que no permite ser reprimida o domesticada, tal como un guepardo. La capacidad de abrazar la ferocidad y la velocidad hacen únicas a estas personas. Además, los nacidos bajo el signo de Aries tienen algo llamado hiperenfoque, es decir, fijan su mirada en la presa y no se rinden hasta conseguirla, como los guepardos." },
    { month: "Tauro: oso", urlImage: "../../../assets/img/tauro.jpg", description:"Como un animal protector, los regidos por Tauro tienen la tendencia a proteger a los que lo rodean y a las personas que más quieren, como la mamá oso con sus cachorros. Además, el oso simboliza fuerza y fertilidad, por lo cual establecen una base sólida en todo lo que hacen." },
    { month: "Géminis: delfín", urlImage: "../../../assets/img/Geminis.jpg", description:"Como los delfines, los regidos por Géminis son curiosos y divertidos, siempre tratan de crear experiencias memorables en su vida y vivir sin un conjunto de reglas. Además, son personas muy inteligentes, pues se sabe que los delfines son unas de las criaturas más inteligentes de la naturaleza." },
    { month: "Cáncer: conejo", urlImage: "../../../assets/img/cancer.jpg", description:"Como los conejos, los regidos por este signo tienen una personalidad compleja, pues pueden ser muy tímidos, nerviosos y asustadizos, pero también son muy seguros cuando deben y cuando se trata de sobrevivir. Las personas del signo Cáncer pueden ser inteligentes y creativos, y enseñan a no dejar que los miedos los abrumen y asumir todas las circunstancias de la vida." },
    { month: "Leo: dragón", urlImage: "../../../assets/img/leo.jpg", description:"Con su sola presencia el dragón domina un lugar por el poder y la majestuosidad que representa; así mismo son las personas de Leo: imponentes, fuertes y poderosas. Además, los regidos por Leo son considerados líderes innatos, pero suelen ser nobles y siempre buscan formas de demostrar lo mucho que valen." },
    { month: "Virgo: zorro", urlImage: "../../../assets/img/virgo.jpg", description:"A pesar de ser pequeños, los zorros son muy ágiles mentalmente. En las historias de la literatura, el zorro siempre se ha representado como astuto, inteligente y rápido. Así como los zorros, los regidos por Virgo son inteligentes y generan una sensación de hogar en el entorno. Son muy analíticos y astutos, lo que les da una sabiduría infinita." },
    { month: "Libra: cisne", urlImage: "../../../assets/img/libra.jpg", description:"Los regidos por libra son elegantes y bellos, como los cisnes. Para los libra, encontrar el equilibrio y la tranquilidad en las aguas turbulentas de la vida es muy importante. Además, tienen una originalidad que nadie puede copiar o imitar, y eso se ve tanto en lo físico como en lo espiritual." },
    { month: "Escorpión: fénix", urlImage: "../../../assets/img/escorpio.jpg", description:"Los regidos por Escorpio tienen una doble personalidad; pueden ser fuertes para protegerse de los momentos de peligro, la angustia o las adicciones, pero debajo de su coraza esconden un lado gentil más abierto y vulnerable. Como el ave fénix, son personas que simbolizan el crecimiento, la renovación y la fuerza interior." },
    { month: "Sagitario: gato", urlImage: "../../../assets/img/sagitario.jpg", description:"Con la independencia que caracteriza a los gatos, los Sagitario son libres y marchan a su propio ritmo, así mismo no cambian por nada ni por nadie. Como los gatos, son curiosos, libres y solo responden por sí mismos y dan al mundo justo lo que quieren dar." },
    
  ]
  

  horoscopoSelected: InfoMonth
  constructor() {
    this.horoscopoSelected = this.horoscopos[2];
   }

  ngOnInit(): void {
  }

  changeHoroscopoSelected = (positionMonth:number) => {
    this.horoscopoSelected = this.horoscopos[positionMonth]
  }
}
