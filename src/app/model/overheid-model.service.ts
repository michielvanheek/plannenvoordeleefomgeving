import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OverheidModelService {
  overheden = {
    "0000": {"name": "Rijksoverheid", "cbsCode": "0000"},
    "0003": {"name": "Appingedam", "cbsCode": "0003", "provincieCbsCode": "9920"},
    "0005": {"name": "Bedum", "cbsCode": "0005", "provincieCbsCode": "9920"},
    "0007": {"name": "Bellingwedde", "cbsCode": "0007", "provincieCbsCode": "9920"},
    "0009": {"name": "Ten Boer", "cbsCode": "0009", "provincieCbsCode": "9920"},
    "0010": {"name": "Delfzijl", "cbsCode": "0010", "provincieCbsCode": "9920"},
    "0014": {"name": "Groningen", "cbsCode": "0014", "provincieCbsCode": "9920"},
    "0015": {"name": "Grootegast", "cbsCode": "0015", "provincieCbsCode": "9920"},
    "0017": {"name": "Haren", "cbsCode": "0017", "provincieCbsCode": "9920"},
    "0018": {"name": "Hoogezand-Sappemeer", "cbsCode": "0018", "provincieCbsCode": "9920"},
    "0022": {"name": "Leek", "cbsCode": "0022", "provincieCbsCode": "9920"},
    "0024": {"name": "Loppersum", "cbsCode": "0024", "provincieCbsCode": "9920"},
    "0025": {"name": "Marum", "cbsCode": "0025", "provincieCbsCode": "9920"},
    "0034": {"name": "Almere", "cbsCode": "0034", "provincieCbsCode": "9924"},
    "0037": {"name": "Stadskanaal", "cbsCode": "0037", "provincieCbsCode": "9920"},
    "0040": {"name": "Slochteren", "cbsCode": "0040", "provincieCbsCode": "9920"},
    "0047": {"name": "Veendam", "cbsCode": "0047", "provincieCbsCode": "9920"},
    "0048": {"name": "Vlagtwedde", "cbsCode": "0048", "provincieCbsCode": "9920"},
    "0050": {"name": "Zeewolde", "cbsCode": "0050", "provincieCbsCode": "9924"},
    "0053": {"name": "Winsum", "cbsCode": "0053", "provincieCbsCode": "9920"},
    "0056": {"name": "Zuidhorn", "cbsCode": "0056", "provincieCbsCode": "9920"},
    "0058": {"name": "Dongeradeel", "cbsCode": "0058", "provincieCbsCode": "9921"},
    "0059": {"name": "Achtkarspelen", "cbsCode": "0059", "provincieCbsCode": "9921"},
    "0060": {"name": "Ameland", "cbsCode": "0060", "provincieCbsCode": "9921"},
    "0063": {"name": "het Bildt", "cbsCode": "0063", "provincieCbsCode": "9921"},
    "0070": {"name": "Franekeradeel", "cbsCode": "0070", "provincieCbsCode": "9921"},
    "0072": {"name": "Harlingen", "cbsCode": "0072", "provincieCbsCode": "9921"},
    "0074": {"name": "Heerenveen", "cbsCode": "0074", "provincieCbsCode": "9921"},
    "0079": {"name": "Kollumerland en Nieuwkruisland", "cbsCode": "0079", "provincieCbsCode": "9921"},
    "0080": {"name": "Leeuwarden", "cbsCode": "0080", "provincieCbsCode": "9921"},
    "0081": {"name": "Leeuwarderadeel", "cbsCode": "0081", "provincieCbsCode": "9921"},
    "0085": {"name": "Ooststellingwerf", "cbsCode": "0085", "provincieCbsCode": "9921"},
    "0086": {"name": "Opsterland", "cbsCode": "0086", "provincieCbsCode": "9921"},
    "0088": {"name": "Schiermonnikoog", "cbsCode": "0088", "provincieCbsCode": "9921"},
    "0090": {"name": "Smallingerland", "cbsCode": "0090", "provincieCbsCode": "9921"},
    "0093": {"name": "Terschelling", "cbsCode": "0093", "provincieCbsCode": "9921"},
    "0096": {"name": "Vlieland", "cbsCode": "0096", "provincieCbsCode": "9921"},
    "0098": {"name": "Weststellingwerf", "cbsCode": "0098", "provincieCbsCode": "9921"},
    "0106": {"name": "Assen", "cbsCode": "0106", "provincieCbsCode": "9922"},
    "0109": {"name": "Coevorden", "cbsCode": "0109", "provincieCbsCode": "9922"},
    "0114": {"name": "Emmen", "cbsCode": "0114", "provincieCbsCode": "9922"},
    "0118": {"name": "Hoogeveen", "cbsCode": "0118", "provincieCbsCode": "9922"},
    "0119": {"name": "Meppel", "cbsCode": "0119", "provincieCbsCode": "9922"},
    "0140": {"name": "Littenseradiel", "cbsCode": "0140", "provincieCbsCode": "9921"},
    "0141": {"name": "Almelo", "cbsCode": "0141", "provincieCbsCode": "9923"},
    "0147": {"name": "Borne", "cbsCode": "0147", "provincieCbsCode": "9923"},
    "0148": {"name": "Dalfsen", "cbsCode": "0148", "provincieCbsCode": "9923"},
    "0150": {"name": "Deventer", "cbsCode": "0150", "provincieCbsCode": "9923"},
    "0153": {"name": "Enschede", "cbsCode": "0153", "provincieCbsCode": "9923"},
    "0158": {"name": "Haaksbergen", "cbsCode": "0158", "provincieCbsCode": "9923"},
    "0160": {"name": "Hardenberg", "cbsCode": "0160", "provincieCbsCode": "9923"},
    "0163": {"name": "Hellendoorn", "cbsCode": "0163", "provincieCbsCode": "9923"},
    "0164": {"name": "Hengelo", "cbsCode": "0164", "provincieCbsCode": "9923"},
    "0166": {"name": "Kampen", "cbsCode": "0166", "provincieCbsCode": "9923"},
    "0168": {"name": "Losser", "cbsCode": "0168", "provincieCbsCode": "9923"},
    "0171": {"name": "Noordoostpolder", "cbsCode": "0171", "provincieCbsCode": "9924"},
    "0173": {"name": "Oldenzaal", "cbsCode": "0173", "provincieCbsCode": "9923"},
    "0175": {"name": "Ommen", "cbsCode": "0175", "provincieCbsCode": "9923"},
    "0177": {"name": "Raalte", "cbsCode": "0177", "provincieCbsCode": "9923"},
    "0180": {"name": "Staphorst", "cbsCode": "0180", "provincieCbsCode": "9923"},
    "0183": {"name": "Tubbergen", "cbsCode": "0183", "provincieCbsCode": "9923"},
    "0184": {"name": "Urk", "cbsCode": "0184", "provincieCbsCode": "9924"},
    "0189": {"name": "Wierden", "cbsCode": "0189", "provincieCbsCode": "9923"},
    "0193": {"name": "Zwolle", "cbsCode": "0193", "provincieCbsCode": "9923"},
    "0196": {"name": "Rijnwaarden", "cbsCode": "0196", "provincieCbsCode": "9925"},
    "0197": {"name": "Aalten", "cbsCode": "0197", "provincieCbsCode": "9925"},
    "0200": {"name": "Apeldoorn", "cbsCode": "0200", "provincieCbsCode": "9925"},
    "0202": {"name": "Arnhem", "cbsCode": "0202", "provincieCbsCode": "9925"},
    "0203": {"name": "Barneveld", "cbsCode": "0203", "provincieCbsCode": "9925"},
    "0209": {"name": "Beuningen", "cbsCode": "0209", "provincieCbsCode": "9925"},
    "0213": {"name": "Brummen", "cbsCode": "0213", "provincieCbsCode": "9925"},
    "0214": {"name": "Buren", "cbsCode": "0214", "provincieCbsCode": "9925"},
    "0216": {"name": "Culemborg", "cbsCode": "0216", "provincieCbsCode": "9925"},
    "0221": {"name": "Doesburg", "cbsCode": "0221", "provincieCbsCode": "9925"},
    "0222": {"name": "Doetinchem", "cbsCode": "0222", "provincieCbsCode": "9925"},
    "0225": {"name": "Druten", "cbsCode": "0225", "provincieCbsCode": "9925"},
    "0226": {"name": "Duiven", "cbsCode": "0226", "provincieCbsCode": "9925"},
    "0228": {"name": "Ede", "cbsCode": "0228", "provincieCbsCode": "9925"},
    "0230": {"name": "Elburg", "cbsCode": "0230", "provincieCbsCode": "9925"},
    "0232": {"name": "Epe", "cbsCode": "0232", "provincieCbsCode": "9925"},
    "0233": {"name": "Ermelo", "cbsCode": "0233", "provincieCbsCode": "9925"},
    "0236": {"name": "Geldermalsen", "cbsCode": "0236", "provincieCbsCode": "9925"},
    "0243": {"name": "Harderwijk", "cbsCode": "0243", "provincieCbsCode": "9925"},
    "0244": {"name": "Hattem", "cbsCode": "0244", "provincieCbsCode": "9925"},
    "0246": {"name": "Heerde", "cbsCode": "0246", "provincieCbsCode": "9925"},
    "0252": {"name": "Heumen", "cbsCode": "0252", "provincieCbsCode": "9925"},
    "0262": {"name": "Lochem", "cbsCode": "0262", "provincieCbsCode": "9925"},
    "0263": {"name": "Maasdriel", "cbsCode": "0263", "provincieCbsCode": "9925"},
    "0267": {"name": "Nijkerk", "cbsCode": "0267", "provincieCbsCode": "9925"},
    "0268": {"name": "Nijmegen", "cbsCode": "0268", "provincieCbsCode": "9925"},
    "0269": {"name": "Oldebroek", "cbsCode": "0269", "provincieCbsCode": "9925"},
    "0273": {"name": "Putten", "cbsCode": "0273", "provincieCbsCode": "9925"},
    "0274": {"name": "Renkum", "cbsCode": "0274", "provincieCbsCode": "9925"},
    "0275": {"name": "Rheden", "cbsCode": "0275", "provincieCbsCode": "9925"},
    "0277": {"name": "Rozendaal", "cbsCode": "0277", "provincieCbsCode": "9925"},
    "0279": {"name": "Scherpenzeel", "cbsCode": "0279", "provincieCbsCode": "9925"},
    "0281": {"name": "Tiel", "cbsCode": "0281", "provincieCbsCode": "9925"},
    "0285": {"name": "Voorst", "cbsCode": "0285", "provincieCbsCode": "9925"},
    "0289": {"name": "Wageningen", "cbsCode": "0289", "provincieCbsCode": "9925"},
    "0293": {"name": "Westervoort", "cbsCode": "0293", "provincieCbsCode": "9925"},
    "0294": {"name": "Winterswijk", "cbsCode": "0294", "provincieCbsCode": "9925"},
    "0296": {"name": "Wijchen", "cbsCode": "0296", "provincieCbsCode": "9925"},
    "0297": {"name": "Zaltbommel", "cbsCode": "0297", "provincieCbsCode": "9925"},
    "0299": {"name": "Zevenaar", "cbsCode": "0299", "provincieCbsCode": "9925"},
    "0301": {"name": "Zutphen", "cbsCode": "0301", "provincieCbsCode": "9925"},
    "0302": {"name": "Nunspeet", "cbsCode": "0302", "provincieCbsCode": "9925"},
    "0303": {"name": "Dronten", "cbsCode": "0303", "provincieCbsCode": "9924"},
    "0304": {"name": "Neerijnen", "cbsCode": "0304", "provincieCbsCode": "9925"},
    "0307": {"name": "Amersfoort", "cbsCode": "0307", "provincieCbsCode": "9926"},
    "0308": {"name": "Baarn", "cbsCode": "0308", "provincieCbsCode": "9926"},
    "0310": {"name": "De Bilt", "cbsCode": "0310", "provincieCbsCode": "9926"},
    "0312": {"name": "Bunnik", "cbsCode": "0312", "provincieCbsCode": "9926"},
    "0313": {"name": "Bunschoten", "cbsCode": "0313", "provincieCbsCode": "9926"},
    "0317": {"name": "Eemnes", "cbsCode": "0317", "provincieCbsCode": "9926"},
    "0321": {"name": "Houten", "cbsCode": "0321", "provincieCbsCode": "9926"},
    "0327": {"name": "Leusden", "cbsCode": "0327", "provincieCbsCode": "9926"},
    "0331": {"name": "Lopik", "cbsCode": "0331", "provincieCbsCode": "9926"},
    "0335": {"name": "Montfoort", "cbsCode": "0335", "provincieCbsCode": "9926"},
    "0339": {"name": "Renswoude", "cbsCode": "0339", "provincieCbsCode": "9926"},
    "0340": {"name": "Rhenen", "cbsCode": "0340", "provincieCbsCode": "9926"},
    "0342": {"name": "Soest", "cbsCode": "0342", "provincieCbsCode": "9926"},
    "0344": {"name": "Utrecht", "cbsCode": "0344", "provincieCbsCode": "9926"},
    "0345": {"name": "Veenendaal", "cbsCode": "0345", "provincieCbsCode": "9926"},
    "0351": {"name": "Woudenberg", "cbsCode": "0351", "provincieCbsCode": "9926"},
    "0352": {"name": "Wijk bij Duurstede", "cbsCode": "0352", "provincieCbsCode": "9926"},
    "0353": {"name": "IJsselstein", "cbsCode": "0353", "provincieCbsCode": "9926"},
    "0355": {"name": "Zeist", "cbsCode": "0355", "provincieCbsCode": "9926"},
    "0356": {"name": "Nieuwegein", "cbsCode": "0356", "provincieCbsCode": "9926"},
    "0358": {"name": "Aalsmeer", "cbsCode": "0358", "provincieCbsCode": "9927"},
    "0361": {"name": "Alkmaar", "cbsCode": "0361", "provincieCbsCode": "9927"},
    "0362": {"name": "Amstelveen", "cbsCode": "0362", "provincieCbsCode": "9927"},
    "0363": {"name": "Amsterdam", "cbsCode": "0363", "provincieCbsCode": "9927"},
    "0370": {"name": "Beemster", "cbsCode": "0370", "provincieCbsCode": "9927"},
    "0373": {"name": "Bergen (NH.)", "cbsCode": "0373", "provincieCbsCode": "9927"},
    "0375": {"name": "Beverwijk", "cbsCode": "0375", "provincieCbsCode": "9927"},
    "0376": {"name": "Blaricum", "cbsCode": "0376", "provincieCbsCode": "9927"},
    "0377": {"name": "Bloemendaal", "cbsCode": "0377", "provincieCbsCode": "9927"},
    "0383": {"name": "Castricum", "cbsCode": "0383", "provincieCbsCode": "9927"},
    "0384": {"name": "Diemen", "cbsCode": "0384", "provincieCbsCode": "9927"},
    "0385": {"name": "Edam-Volendam", "cbsCode": "0385", "provincieCbsCode": "9927"},
    "0388": {"name": "Enkhuizen", "cbsCode": "0388", "provincieCbsCode": "9927"},
    "0392": {"name": "Haarlem", "cbsCode": "0392", "provincieCbsCode": "9927"},
    "0393": {"name": "Haarlemmerliede en Spaarnwoude", "cbsCode": "0393", "provincieCbsCode": "9927"},
    "0394": {"name": "Haarlemmermeer", "cbsCode": "0394", "provincieCbsCode": "9927"},
    "0396": {"name": "Heemskerk", "cbsCode": "0396", "provincieCbsCode": "9927"},
    "0397": {"name": "Heemstede", "cbsCode": "0397", "provincieCbsCode": "9927"},
    "0398": {"name": "Heerhugowaard", "cbsCode": "0398", "provincieCbsCode": "9927"},
    "0399": {"name": "Heiloo", "cbsCode": "0399", "provincieCbsCode": "9927"},
    "0400": {"name": "Den Helder", "cbsCode": "0400", "provincieCbsCode": "9927"},
    "0402": {"name": "Hilversum", "cbsCode": "0402", "provincieCbsCode": "9927"},
    "0405": {"name": "Hoorn", "cbsCode": "0405", "provincieCbsCode": "9927"},
    "0406": {"name": "Huizen", "cbsCode": "0406", "provincieCbsCode": "9927"},
    "0415": {"name": "Landsmeer", "cbsCode": "0415", "provincieCbsCode": "9927"},
    "0416": {"name": "Langedijk", "cbsCode": "0416", "provincieCbsCode": "9927"},
    "0417": {"name": "Laren", "cbsCode": "0417", "provincieCbsCode": "9927"},
    "0420": {"name": "Medemblik", "cbsCode": "0420", "provincieCbsCode": "9927"},
    "0431": {"name": "Oostzaan", "cbsCode": "0431", "provincieCbsCode": "9927"},
    "0432": {"name": "Opmeer", "cbsCode": "0432", "provincieCbsCode": "9927"},
    "0437": {"name": "Ouder-Amstel", "cbsCode": "0437", "provincieCbsCode": "9927"},
    "0439": {"name": "Purmerend", "cbsCode": "0439", "provincieCbsCode": "9927"},
    "0441": {"name": "Schagen", "cbsCode": "0441", "provincieCbsCode": "9927"},
    "0448": {"name": "Texel", "cbsCode": "0448", "provincieCbsCode": "9927"},
    "0450": {"name": "Uitgeest", "cbsCode": "0450", "provincieCbsCode": "9927"},
    "0451": {"name": "Uithoorn", "cbsCode": "0451", "provincieCbsCode": "9927"},
    "0453": {"name": "Velsen", "cbsCode": "0453", "provincieCbsCode": "9927"},
    "0457": {"name": "Weesp", "cbsCode": "0457", "provincieCbsCode": "9927"},
    "0473": {"name": "Zandvoort", "cbsCode": "0473", "provincieCbsCode": "9927"},
    "0479": {"name": "Zaanstad", "cbsCode": "0479", "provincieCbsCode": "9927"},
    "0482": {"name": "Alblasserdam", "cbsCode": "0482", "provincieCbsCode": "9928"},
    "0484": {"name": "Alphen aan den Rijn", "cbsCode": "0484", "provincieCbsCode": "9928"},
    "0489": {"name": "Barendrecht", "cbsCode": "0489", "provincieCbsCode": "9928"},
    "0498": {"name": "Drechterland", "cbsCode": "0498", "provincieCbsCode": "9927"},
    "0501": {"name": "Brielle", "cbsCode": "0501", "provincieCbsCode": "9928"},
    "0502": {"name": "Capelle aan den IJssel", "cbsCode": "0502", "provincieCbsCode": "9928"},
    "0503": {"name": "Delft", "cbsCode": "0503", "provincieCbsCode": "9928"},
    "0505": {"name": "Dordrecht", "cbsCode": "0505", "provincieCbsCode": "9928"},
    "0512": {"name": "Gorinchem", "cbsCode": "0512", "provincieCbsCode": "9928"},
    "0513": {"name": "Gouda", "cbsCode": "0513", "provincieCbsCode": "9928"},
    "0518": {"name": "'s-Gravenhage", "cbsCode": "0518", "provincieCbsCode": "9928"},
    "0523": {"name": "Hardinxveld-Giessendam", "cbsCode": "0523", "provincieCbsCode": "9928"},
    "0530": {"name": "Hellevoetsluis", "cbsCode": "0530", "provincieCbsCode": "9928"},
    "0531": {"name": "Hendrik-Ido-Ambacht", "cbsCode": "0531", "provincieCbsCode": "9928"},
    "0532": {"name": "Stede Broec", "cbsCode": "0532", "provincieCbsCode": "9927"},
    "0534": {"name": "Hillegom", "cbsCode": "0534", "provincieCbsCode": "9928"},
    "0537": {"name": "Katwijk", "cbsCode": "0537", "provincieCbsCode": "9928"},
    "0542": {"name": "Krimpen aan den IJssel", "cbsCode": "0542", "provincieCbsCode": "9928"},
    "0545": {"name": "Leerdam", "cbsCode": "0545", "provincieCbsCode": "9928"},
    "0546": {"name": "Leiden", "cbsCode": "0546", "provincieCbsCode": "9928"},
    "0547": {"name": "Leiderdorp", "cbsCode": "0547", "provincieCbsCode": "9928"},
    "0553": {"name": "Lisse", "cbsCode": "0553", "provincieCbsCode": "9928"},
    "0556": {"name": "Maassluis", "cbsCode": "0556", "provincieCbsCode": "9928"},
    "0569": {"name": "Nieuwkoop", "cbsCode": "0569", "provincieCbsCode": "9928"},
    "0575": {"name": "Noordwijk", "cbsCode": "0575", "provincieCbsCode": "9928"},
    "0576": {"name": "Noordwijkerhout", "cbsCode": "0576", "provincieCbsCode": "9928"},
    "0579": {"name": "Oegstgeest", "cbsCode": "0579", "provincieCbsCode": "9928"},
    "0584": {"name": "Oud-Beijerland", "cbsCode": "0584", "provincieCbsCode": "9928"},
    "0585": {"name": "Binnenmaas", "cbsCode": "0585", "provincieCbsCode": "9928"},
    "0588": {"name": "Korendijk", "cbsCode": "0588", "provincieCbsCode": "9928"},
    "0589": {"name": "Oudewater", "cbsCode": "0589", "provincieCbsCode": "9926"},
    "0590": {"name": "Papendrecht", "cbsCode": "0590", "provincieCbsCode": "9928"},
    "0597": {"name": "Ridderkerk", "cbsCode": "0597", "provincieCbsCode": "9928"},
    "0599": {"name": "Rotterdam", "cbsCode": "0599", "provincieCbsCode": "9928"},
    "0603": {"name": "Rijswijk", "cbsCode": "0603", "provincieCbsCode": "9928"},
    "0606": {"name": "Schiedam", "cbsCode": "0606", "provincieCbsCode": "9928"},
    "0610": {"name": "Sliedrecht", "cbsCode": "0610", "provincieCbsCode": "9928"},
    "0611": {"name": "Cromstrijen", "cbsCode": "0611", "provincieCbsCode": "9928"},
    "0613": {"name": "Albrandswaard", "cbsCode": "0613", "provincieCbsCode": "9928"},
    "0614": {"name": "Westvoorne", "cbsCode": "0614", "provincieCbsCode": "9928"},
    "0617": {"name": "Strijen", "cbsCode": "0617", "provincieCbsCode": "9928"},
    "0620": {"name": "Vianen", "cbsCode": "0620", "provincieCbsCode": "9926"},
    "0622": {"name": "Vlaardingen", "cbsCode": "0622", "provincieCbsCode": "9928"},
    "0626": {"name": "Voorschoten", "cbsCode": "0626", "provincieCbsCode": "9928"},
    "0627": {"name": "Waddinxveen", "cbsCode": "0627", "provincieCbsCode": "9928"},
    "0629": {"name": "Wassenaar", "cbsCode": "0629", "provincieCbsCode": "9928"},
    "0632": {"name": "Woerden", "cbsCode": "0632", "provincieCbsCode": "9926"},
    "0637": {"name": "Zoetermeer", "cbsCode": "0637", "provincieCbsCode": "9928"},
    "0638": {"name": "Zoeterwoude", "cbsCode": "0638", "provincieCbsCode": "9928"},
    "0642": {"name": "Zwijndrecht", "cbsCode": "0642", "provincieCbsCode": "9928"},
    "0654": {"name": "Borsele", "cbsCode": "0654", "provincieCbsCode": "9929"},
    "0664": {"name": "Goes", "cbsCode": "0664", "provincieCbsCode": "9929"},
    "0668": {"name": "West Maas en Waal", "cbsCode": "0668", "provincieCbsCode": "9925"},
    "0677": {"name": "Hulst", "cbsCode": "0677", "provincieCbsCode": "9929"},
    "0678": {"name": "Kapelle", "cbsCode": "0678", "provincieCbsCode": "9929"},
    "0687": {"name": "Middelburg", "cbsCode": "0687", "provincieCbsCode": "9929"},
    "0689": {"name": "Giessenlanden", "cbsCode": "0689", "provincieCbsCode": "9928"},
    "0703": {"name": "Reimerswaal", "cbsCode": "0703", "provincieCbsCode": "9929"},
    "0707": {"name": "Zederik", "cbsCode": "0707", "provincieCbsCode": "9928"},
    "0715": {"name": "Terneuzen", "cbsCode": "0715", "provincieCbsCode": "9929"},
    "0716": {"name": "Tholen", "cbsCode": "0716", "provincieCbsCode": "9929"},
    "0717": {"name": "Veere", "cbsCode": "0717", "provincieCbsCode": "9929"},
    "0718": {"name": "Vlissingen", "cbsCode": "0718", "provincieCbsCode": "9929"},
    "0733": {"name": "Lingewaal", "cbsCode": "0733", "provincieCbsCode": "9925"},
    "0736": {"name": "De Ronde Venen", "cbsCode": "0736", "provincieCbsCode": "9926"},
    "0737": {"name": "Tytsjerksteradiel", "cbsCode": "0737", "provincieCbsCode": "9921"},
    "0738": {"name": "Aalburg", "cbsCode": "0738", "provincieCbsCode": "9930"},
    "0743": {"name": "Asten", "cbsCode": "0743", "provincieCbsCode": "9930"},
    "0744": {"name": "Baarle-Nassau", "cbsCode": "0744", "provincieCbsCode": "9930"},
    "0748": {"name": "Bergen op Zoom", "cbsCode": "0748", "provincieCbsCode": "9930"},
    "0753": {"name": "Best", "cbsCode": "0753", "provincieCbsCode": "9930"},
    "0755": {"name": "Boekel", "cbsCode": "0755", "provincieCbsCode": "9930"},
    "0756": {"name": "Boxmeer", "cbsCode": "0756", "provincieCbsCode": "9930"},
    "0757": {"name": "Boxtel", "cbsCode": "0757", "provincieCbsCode": "9930"},
    "0758": {"name": "Breda", "cbsCode": "0758", "provincieCbsCode": "9930"},
    "0762": {"name": "Deurne", "cbsCode": "0762", "provincieCbsCode": "9930"},
    "0765": {"name": "Pekela", "cbsCode": "0765", "provincieCbsCode": "9920"},
    "0766": {"name": "Dongen", "cbsCode": "0766", "provincieCbsCode": "9930"},
    "0770": {"name": "Eersel", "cbsCode": "0770", "provincieCbsCode": "9930"},
    "0772": {"name": "Eindhoven", "cbsCode": "0772", "provincieCbsCode": "9930"},
    "0777": {"name": "Etten-Leur", "cbsCode": "0777", "provincieCbsCode": "9930"},
    "0779": {"name": "Geertruidenberg", "cbsCode": "0779", "provincieCbsCode": "9930"},
    "0784": {"name": "Gilze en Rijen", "cbsCode": "0784", "provincieCbsCode": "9930"},
    "0785": {"name": "Goirle", "cbsCode": "0785", "provincieCbsCode": "9930"},
    "0786": {"name": "Grave", "cbsCode": "0786", "provincieCbsCode": "9930"},
    "0788": {"name": "Haaren", "cbsCode": "0788", "provincieCbsCode": "9930"},
    "0794": {"name": "Helmond", "cbsCode": "0794", "provincieCbsCode": "9930"},
    "0796": {"name": "'s-Hertogenbosch", "cbsCode": "0796", "provincieCbsCode": "9930"},
    "0797": {"name": "Heusden", "cbsCode": "0797", "provincieCbsCode": "9930"},
    "0798": {"name": "Hilvarenbeek", "cbsCode": "0798", "provincieCbsCode": "9930"},
    "0809": {"name": "Loon op Zand", "cbsCode": "0809", "provincieCbsCode": "9930"},
    "0815": {"name": "Mill en Sint Hubert", "cbsCode": "0815", "provincieCbsCode": "9930"},
    "0820": {"name": "Nuenen, Gerwen en Nederwetten", "cbsCode": "0820", "provincieCbsCode": "9930"},
    "0823": {"name": "Oirschot", "cbsCode": "0823", "provincieCbsCode": "9930"},
    "0824": {"name": "Oisterwijk", "cbsCode": "0824", "provincieCbsCode": "9930"},
    "0826": {"name": "Oosterhout", "cbsCode": "0826", "provincieCbsCode": "9930"},
    "0828": {"name": "Oss", "cbsCode": "0828", "provincieCbsCode": "9930"},
    "0840": {"name": "Rucphen", "cbsCode": "0840", "provincieCbsCode": "9930"},
    "0844": {"name": "Schijndel", "cbsCode": "0844", "provincieCbsCode": "9930"},
    "0845": {"name": "Sint-Michielsgestel", "cbsCode": "0845", "provincieCbsCode": "9930"},
    "0846": {"name": "Sint-Oedenrode", "cbsCode": "0846", "provincieCbsCode": "9930"},
    "0847": {"name": "Someren", "cbsCode": "0847", "provincieCbsCode": "9930"},
    "0848": {"name": "Son en Breugel", "cbsCode": "0848", "provincieCbsCode": "9930"},
    "0851": {"name": "Steenbergen", "cbsCode": "0851", "provincieCbsCode": "9930"},
    "0852": {"name": "Waterland", "cbsCode": "0852", "provincieCbsCode": "9927"},
    "0855": {"name": "Tilburg", "cbsCode": "0855", "provincieCbsCode": "9930"},
    "0856": {"name": "Uden", "cbsCode": "0856", "provincieCbsCode": "9930"},
    "0858": {"name": "Valkenswaard", "cbsCode": "0858", "provincieCbsCode": "9930"},
    "0860": {"name": "Veghel", "cbsCode": "0860", "provincieCbsCode": "9930"},
    "0861": {"name": "Veldhoven", "cbsCode": "0861", "provincieCbsCode": "9930"},
    "0865": {"name": "Vught", "cbsCode": "0865", "provincieCbsCode": "9930"},
    "0866": {"name": "Waalre", "cbsCode": "0866", "provincieCbsCode": "9930"},
    "0867": {"name": "Waalwijk", "cbsCode": "0867", "provincieCbsCode": "9930"},
    "0870": {"name": "Werkendam", "cbsCode": "0870", "provincieCbsCode": "9930"},
    "0873": {"name": "Woensdrecht", "cbsCode": "0873", "provincieCbsCode": "9930"},
    "0874": {"name": "Woudrichem", "cbsCode": "0874", "provincieCbsCode": "9930"},
    "0879": {"name": "Zundert", "cbsCode": "0879", "provincieCbsCode": "9930"},
    "0880": {"name": "Wormerland", "cbsCode": "0880", "provincieCbsCode": "9927"},
    "0881": {"name": "Onderbanken", "cbsCode": "0881", "provincieCbsCode": "9931"},
    "0882": {"name": "Landgraaf", "cbsCode": "0882", "provincieCbsCode": "9931"},
    "0888": {"name": "Beek", "cbsCode": "0888", "provincieCbsCode": "9931"},
    "0889": {"name": "Beesel", "cbsCode": "0889", "provincieCbsCode": "9931"},
    "0893": {"name": "Bergen (L.)", "cbsCode": "0893", "provincieCbsCode": "9931"},
    "0899": {"name": "Brunssum", "cbsCode": "0899", "provincieCbsCode": "9931"},
    "0907": {"name": "Gennep", "cbsCode": "0907", "provincieCbsCode": "9931"},
    "0917": {"name": "Heerlen", "cbsCode": "0917", "provincieCbsCode": "9931"},
    "0928": {"name": "Kerkrade", "cbsCode": "0928", "provincieCbsCode": "9931"},
    "0935": {"name": "Maastricht", "cbsCode": "0935", "provincieCbsCode": "9931"},
    "0938": {"name": "Meerssen", "cbsCode": "0938", "provincieCbsCode": "9931"},
    "0944": {"name": "Mook en Middelaar", "cbsCode": "0944", "provincieCbsCode": "9931"},
    "0946": {"name": "Nederweert", "cbsCode": "0946", "provincieCbsCode": "9931"},
    "0951": {"name": "Nuth", "cbsCode": "0951", "provincieCbsCode": "9931"},
    "0957": {"name": "Roermond", "cbsCode": "0957", "provincieCbsCode": "9931"},
    "0962": {"name": "Schinnen", "cbsCode": "0962", "provincieCbsCode": "9931"},
    "0965": {"name": "Simpelveld", "cbsCode": "0965", "provincieCbsCode": "9931"},
    "0971": {"name": "Stein", "cbsCode": "0971", "provincieCbsCode": "9931"},
    "0981": {"name": "Vaals", "cbsCode": "0981", "provincieCbsCode": "9931"},
    "0983": {"name": "Venlo", "cbsCode": "0983", "provincieCbsCode": "9931"},
    "0984": {"name": "Venray", "cbsCode": "0984", "provincieCbsCode": "9931"},
    "0986": {"name": "Voerendaal", "cbsCode": "0986", "provincieCbsCode": "9931"},
    "0988": {"name": "Weert", "cbsCode": "0988", "provincieCbsCode": "9931"},
    "0994": {"name": "Valkenburg aan de Geul", "cbsCode": "0994", "provincieCbsCode": "9931"},
    "0995": {"name": "Lelystad", "cbsCode": "0995", "provincieCbsCode": "9924"},
    "1507": {"name": "Horst aan de Maas", "cbsCode": "1507", "provincieCbsCode": "9931"},
    "1509": {"name": "Oude IJsselstreek", "cbsCode": "1509", "provincieCbsCode": "9925"},
    "1525": {"name": "Teylingen", "cbsCode": "1525", "provincieCbsCode": "9928"},
    "1581": {"name": "Utrechtse Heuvelrug", "cbsCode": "1581", "provincieCbsCode": "9926"},
    "1586": {"name": "Oost Gelre", "cbsCode": "1586", "provincieCbsCode": "9925"},
    "1598": {"name": "Koggenland", "cbsCode": "1598", "provincieCbsCode": "9927"},
    "1621": {"name": "Lansingerland", "cbsCode": "1621", "provincieCbsCode": "9928"},
    "1640": {"name": "Leudal", "cbsCode": "1640", "provincieCbsCode": "9931"},
    "1641": {"name": "Maasgouw", "cbsCode": "1641", "provincieCbsCode": "9931"},
    "1651": {"name": "Eemsmond", "cbsCode": "1651", "provincieCbsCode": "9920"},
    "1652": {"name": "Gemert-Bakel", "cbsCode": "1652", "provincieCbsCode": "9930"},
    "1655": {"name": "Halderberge", "cbsCode": "1655", "provincieCbsCode": "9930"},
    "1658": {"name": "Heeze-Leende", "cbsCode": "1658", "provincieCbsCode": "9930"},
    "1659": {"name": "Laarbeek", "cbsCode": "1659", "provincieCbsCode": "9930"},
    "1663": {"name": "De Marne", "cbsCode": "1663", "provincieCbsCode": "9920"},
    "1667": {"name": "Reusel-De Mierden", "cbsCode": "1667", "provincieCbsCode": "9930"},
    "1669": {"name": "Roerdalen", "cbsCode": "1669", "provincieCbsCode": "9931"},
    "1674": {"name": "Roosendaal", "cbsCode": "1674", "provincieCbsCode": "9930"},
    "1676": {"name": "Schouwen-Duiveland", "cbsCode": "1676", "provincieCbsCode": "9929"},
    "1680": {"name": "Aa en Hunze", "cbsCode": "1680", "provincieCbsCode": "9922"},
    "1681": {"name": "Borger-Odoorn", "cbsCode": "1681", "provincieCbsCode": "9922"},
    "1684": {"name": "Cuijk", "cbsCode": "1684", "provincieCbsCode": "9930"},
    "1685": {"name": "Landerd", "cbsCode": "1685", "provincieCbsCode": "9930"},
    "1690": {"name": "De Wolden", "cbsCode": "1690", "provincieCbsCode": "9922"},
    "1695": {"name": "Noord-Beveland", "cbsCode": "1695", "provincieCbsCode": "9929"},
    "1696": {"name": "Wijdemeren", "cbsCode": "1696", "provincieCbsCode": "9927"},
    "1699": {"name": "Noordenveld", "cbsCode": "1699", "provincieCbsCode": "9922"},
    "1700": {"name": "Twenterand", "cbsCode": "1700", "provincieCbsCode": "9923"},
    "1701": {"name": "Westerveld", "cbsCode": "1701", "provincieCbsCode": "9922"},
    "1702": {"name": "Sint Anthonis", "cbsCode": "1702", "provincieCbsCode": "9930"},
    "1705": {"name": "Lingewaard", "cbsCode": "1705", "provincieCbsCode": "9925"},
    "1706": {"name": "Cranendonck", "cbsCode": "1706", "provincieCbsCode": "9930"},
    "1708": {"name": "Steenwijkerland", "cbsCode": "1708", "provincieCbsCode": "9923"},
    "1709": {"name": "Moerdijk", "cbsCode": "1709", "provincieCbsCode": "9930"},
    "1711": {"name": "Echt-Susteren", "cbsCode": "1711", "provincieCbsCode": "9931"},
    "1714": {"name": "Sluis", "cbsCode": "1714", "provincieCbsCode": "9929"},
    "1719": {"name": "Drimmelen", "cbsCode": "1719", "provincieCbsCode": "9930"},
    "1721": {"name": "Bernheze", "cbsCode": "1721", "provincieCbsCode": "9930"},
    "1722": {"name": "Ferwerderadiel", "cbsCode": "1722", "provincieCbsCode": "9921"},
    "1723": {"name": "Alphen-Chaam", "cbsCode": "1723", "provincieCbsCode": "9930"},
    "1724": {"name": "Bergeijk", "cbsCode": "1724", "provincieCbsCode": "9930"},
    "1728": {"name": "Bladel", "cbsCode": "1728", "provincieCbsCode": "9930"},
    "1729": {"name": "Gulpen-Wittem", "cbsCode": "1729", "provincieCbsCode": "9931"},
    "1730": {"name": "Tynaarlo", "cbsCode": "1730", "provincieCbsCode": "9922"},
    "1731": {"name": "Midden-Drenthe", "cbsCode": "1731", "provincieCbsCode": "9922"},
    "1734": {"name": "Overbetuwe", "cbsCode": "1734", "provincieCbsCode": "9925"},
    "1735": {"name": "Hof van Twente", "cbsCode": "1735", "provincieCbsCode": "9923"},
    "1740": {"name": "Neder-Betuwe", "cbsCode": "1740", "provincieCbsCode": "9925"},
    "1742": {"name": "Rijssen-Holten", "cbsCode": "1742", "provincieCbsCode": "9923"},
    "1771": {"name": "Geldrop-Mierlo", "cbsCode": "1771", "provincieCbsCode": "9930"},
    "1773": {"name": "Olst-Wijhe", "cbsCode": "1773", "provincieCbsCode": "9923"},
    "1774": {"name": "Dinkelland", "cbsCode": "1774", "provincieCbsCode": "9923"},
    "1783": {"name": "Westland", "cbsCode": "1783", "provincieCbsCode": "9928"},
    "1842": {"name": "Midden-Delfland", "cbsCode": "1842", "provincieCbsCode": "9928"},
    "1859": {"name": "Berkelland", "cbsCode": "1859", "provincieCbsCode": "9925"},
    "1876": {"name": "Bronckhorst", "cbsCode": "1876", "provincieCbsCode": "9925"},
    "1883": {"name": "Sittard-Geleen", "cbsCode": "1883", "provincieCbsCode": "9931"},
    "1884": {"name": "Kaag en Braassem", "cbsCode": "1884", "provincieCbsCode": "9928"},
    "1891": {"name": "Dantumadiel", "cbsCode": "1891", "provincieCbsCode": "9921"},
    "1892": {"name": "Zuidplas", "cbsCode": "1892", "provincieCbsCode": "9928"},
    "1894": {"name": "Peel en Maas", "cbsCode": "1894", "provincieCbsCode": "9931"},
    "1895": {"name": "Oldambt", "cbsCode": "1895", "provincieCbsCode": "9920"},
    "1896": {"name": "Zwartewaterland", "cbsCode": "1896", "provincieCbsCode": "9923"},
    "1900": {"name": "Súdwest Fryslân", "cbsCode": "1900", "provincieCbsCode": "9921"},
    "1901": {"name": "Bodegraven-Reeuwijk", "cbsCode": "1901", "provincieCbsCode": "9928"},
    "1903": {"name": "Eijsden-Margraten", "cbsCode": "1903", "provincieCbsCode": "9931"},
    "1904": {"name": "Stichtse Vecht", "cbsCode": "1904", "provincieCbsCode": "9926"},
    "1908": {"name": "Menameradiel", "cbsCode": "1908", "provincieCbsCode": "9921"},
    "1911": {"name": "Hollands Kroon", "cbsCode": "1911", "provincieCbsCode": "9927"},
    "1916": {"name": "Leidschendam-Voorburg", "cbsCode": "1916", "provincieCbsCode": "9928"},
    "1924": {"name": "Goeree-Overflakkee", "cbsCode": "1924", "provincieCbsCode": "9928"},
    "1926": {"name": "Pijnacker-Nootdorp", "cbsCode": "1926", "provincieCbsCode": "9928"},
    "1927": {"name": "Molenwaard", "cbsCode": "1927", "provincieCbsCode": "9928"},
    "1930": {"name": "Nissewaard", "cbsCode": "1930", "provincieCbsCode": "9928"},
    "1931": {"name": "Krimpenerwaard", "cbsCode": "1931", "provincieCbsCode": "9928"},
    "1940": {"name": "De Fryske Marren", "cbsCode": "1940", "provincieCbsCode": "9921"},
    "1942": {"name": "Gooise Meren", "cbsCode": "1942", "provincieCbsCode": "9927"},
    "1945": {"name": "Berg en Dal", "cbsCode": "1945", "provincieCbsCode": "9925"},
    "1948": {"name": "Meierijstad", "cbsCode": "1948", "provincieCbsCode": "9930"},
    "1949": {"name": "Waadhoeke", "cbsCode": "1949", "provincieCbsCode": "9921"},
    "1950": {"name": "Westerwolde", "cbsCode": "1950", "provincieCbsCode": "9920"},
    "1952": {"name": "Midden-Groningen", "cbsCode": "1952", "provincieCbsCode": "9920"},
    "1955": {"name": "Montferland", "cbsCode": "1955", "provincieCbsCode": "9925"},
    "1987": {"name": "Menterwolde", "cbsCode": "1987", "provincieCbsCode": "9920"},
    "9920": {"name": "Groningen", "cbsCode": "9920"},
    "9921": {"name": "Friesland", "cbsCode": "9921"},
    "9922": {"name": "Drenthe", "cbsCode": "9922"},
    "9923": {"name": "Overijssel", "cbsCode": "9923"},
    "9924": {"name": "Flevoland", "cbsCode": "9924"},
    "9925": {"name": "Gelderland", "cbsCode": "9925"},
    "9926": {"name": "Utrecht", "cbsCode": "9926"},
    "9927": {"name": "Noord-Holland", "cbsCode": "9927"},
    "9928": {"name": "Zuid-Holland", "cbsCode": "9928"},
    "9929": {"name": "Zeeland", "cbsCode": "9929"},
    "9930": {"name": "Noord-Brabant", "cbsCode": "9930"},
    "9931": {"name": "Limburg", "cbsCode": "9931"}
  }
}
