
import ImperialIcon from "../components/images/imperial.png";
import NabooIcon from "../components/images/naboo.png";
import AlianceIcon from "../components/images/rebel.png";
import TradeFederationIcon from "../components/images/tradeFederation.png";
import GalaxyIcon from "../components/images/notAffiliation.png";

const Imperial = [
  "Imperial shuttle",
  "Star Destroyer",
  "Death Star",
  "TIE Advanced x1",
  "Executor",
  "Slave 1",
  "Scimitar",
  "AA-9 Coruscant freighter",
  "Republic Assault ship",
  "Theta-class T-2c shuttle",
  "Republic attack cruiser",
  "V-wing",
  "Sentinel-class landing craft",
];

const Aliance = [
  "Millennium Falcon",
  "Y-wing",
  "X-wing",
  "Rebel transport",
  "Calamari Cruiser",
  "A-wing",
  "B-wing",
  "Republic Cruiser",
  "Jedi starfighter",
  "Jedi Interceptor",
  "Banking clan frigte",
  "Belbullab-22 starfighter",
];

const Nabbo = [
  "Naboo fighter",
  "Naboo Royal Starship",
  "Naboo star skiff",
  "J-type diplomatic barge",
  "H-type Nubian yacht",
];
const TradeFederation =[
  
 "Trade Federation cruiser",
 "Droid control ship"
];




export default function Affiliation(Name) {
  if(Imperial.includes(Name)){
    return ImperialIcon;
  }
  if(Aliance.includes(Name)){
    return AlianceIcon;
  }
  if(Nabbo.includes(Name)){
    return NabooIcon;
  }
  if(TradeFederation.includes(Name)){
    return TradeFederationIcon;
  }
  return GalaxyIcon;
}
