import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImowValueModelService {  // v2.1.0
  valueDomains = [
    {
      "label": "activiteitengroep",
      "titel": "Activiteitengroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Activiteitengroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij Activiteit, dat zorgt voor filteren en weergave van de symbolisatie van Activiteit op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aansluitactiviteit",
            "term": "Aansluitactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Aansluitactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de aansluitactiviteit: het verbinden van de kabels en/of leidingen van een netwerk met een netwerkaansluitpunt ten behoeve van een onroerende zaak.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag430",
              "content": "vag430"
            }
          },
          {
            "label": "agrarische activiteit",
            "term": "AgrarischeActiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/AgrarischeActiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de agrarische activiteit: activiteit gericht op het voortbrengen van producten door middel van het telen van gewassen en/of het houden van dieren.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag405",
              "content": "vag405"
            }
          },
          {
            "label": "alarminstallatieactiviteit",
            "term": "Alarminstallatieactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Alarminstallatieactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten m.b.t. een alarminstallatie die een voor de omgeving opvallend geluid of lichtsignaal kan produceren.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag425",
              "content": "vag425"
            }
          },
          {
            "label": "beperkingengebiedactiviteit",
            "term": "Beperkingengebiedactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Beperkingengebiedactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage wanneer het niet wenselijk is het beperkingengebied te specificeren of het beperkingengebied niet in een van de gespecificeerde categorieën valt.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag225",
              "content": "vag225"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een bergingsgebied",
            "term": "BeperkingengebiedactiviteitMBTEenBergingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenBergingsgebied",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een bergingsgebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een installatie in een waterstaatswerk",
            "term": "BeperkingengebiedactiviteitMBTEenInstallatieInEenWaterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenInstallatieInEenWaterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een installatie in een waterstaatswerk.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag223",
              "content": "vag223"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een leiding",
            "term": "BeperkingengebiedactiviteitMBTEenLeiding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenLeiding",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een kabel of leiding.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag200",
              "content": "vag200"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een luchthaven",
            "term": "BeperkingengebiedactiviteitMBTEenLuchthaven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenLuchthaven",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een luchthaven.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag221",
              "content": "vag221"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een oppervlaktewaterlichaam",
            "term": "BeperkingengebiedactiviteitMBTEenOppervlaktewaterlichaam",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenOppervlaktewaterlichaam",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een oppervlaktewaterlichaam.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een spoorweg",
            "term": "BeperkingengebiedactiviteitMBTEenSpoorweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenSpoorweg",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een spoorweg.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag221",
              "content": "vag221"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een waterkering",
            "term": "BeperkingengebiedactiviteitMBTEenWaterkering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenWaterkering",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een waterkering.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een waterstaatswerk",
            "term": "BeperkingengebiedactiviteitMBTEenWaterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenWaterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een waterstaatswerk.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een weg",
            "term": "BeperkingengebiedactiviteitMBTEenWeg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenWeg",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een weg.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag221",
              "content": "vag221"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. een zuiveringtechnisch werk",
            "term": "BeperkingengebiedactiviteitMBTEenZuiveringtechnischWerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTEenZuiveringtechnischWerk",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een zuiveringstechnisch werk.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. grondwater",
            "term": "BeperkingengebiedactiviteitMBTGrondwater",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTGrondwater",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. grondwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "beperkingengebiedactiviteit m.b.t. zeegebied",
            "term": "BeperkingengebiedactiviteitMBTZeegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BeperkingengebiedactiviteitMBTZeegebied",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de beperkingengebiedactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage, voor zover het gaat om beperkingen i.v.m. een zeegebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "bodemactiviteit",
            "term": "Bodemactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Bodemactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die invloed hebben of kunnen hebben op de bodem.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag207",
              "content": "vag207"
            }
          },
          {
            "label": "bouwactiviteit ruimtelijk",
            "term": "BouwactiviteitRuimtelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BouwactiviteitRuimtelijk",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de ruimtelijke aspecten van het bouwen van bouwwerken.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag400",
              "content": "vag400"
            }
          },
          {
            "label": "bouwactiviteit technisch",
            "term": "BouwactiviteitTechnisch",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/BouwactiviteitTechnisch",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de bouwactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage voor zover het betreft de technische aspecten van het bouwen van bouwwerken.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag400",
              "content": "vag400"
            }
          },
          {
            "label": "cultureel-erfgoedactiviteit",
            "term": "CultureelErfgoedactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/CultureelErfgoedactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten m.b.t. cultureel erfgoed.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "cultuuractiviteit",
            "term": "Cultuuractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Cultuuractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het verrichten van culturele activiteiten en/of het exploiteren van een culturele instelling.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "dienstverleningsactiviteit",
            "term": "Dienstverleningsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Dienstverleningsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het verlenen van diensten en het exploiteren van een dienstverleningsbedrijf.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag408",
              "content": "vag408"
            }
          },
          {
            "label": "dierenactiviteit",
            "term": "Dierenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Dierenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten met dieren, niet zijnde een agrarische of milieubelastende activiteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "evenementactiviteit",
            "term": "Evenementactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Evenementactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten in het kader van het organiseren van een evenement.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag418",
              "content": "vag418"
            }
          },
          {
            "label": "exploitatieactiviteit bedrijf",
            "term": "ExploitatieactiviteitBedrijf",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/ExploitatieactiviteitBedrijf",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het exploiteren van een bedrijf.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag403",
              "content": "vag403"
            }
          },
          {
            "label": "exploitatieactiviteit detailhandel",
            "term": "ExploitatieactiviteitDetailhandel",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/ExploitatieactiviteitDetailhandel",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over detailhandel, waaronder begrepen het exploiteren van een detailhandelsbedrijf.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag407",
              "content": "vag407"
            }
          },
          {
            "label": "exploitatieactiviteit horeca",
            "term": "ExploitatieactiviteitHoreca",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/ExploitatieactiviteitHoreca",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over horeca, waaronder begrepen het exploiteren van een horecabedrijf.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag411",
              "content": "vag411"
            }
          },
          {
            "label": "exploitatieactiviteit kantoor",
            "term": "ExploitatieactiviteitKantoor",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/ExploitatieactiviteitKantoor",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die gewoonlijk in een kantoor worden verricht.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag403",
              "content": "vag403"
            }
          },
          {
            "label": "festiviteitactiviteit",
            "term": "Festiviteitactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Festiviteitactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten in het kader van het organiseren van een festiviteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag418",
              "content": "vag418"
            }
          },
          {
            "label": "flora- en fauna-activiteit",
            "term": "FloraEnFaunaActiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/FloraEnFaunaActiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de flora- en fauna-activiteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "gebruiken-van-bouwwerkenactiviteit",
            "term": "GebruikenVanBouwwerkenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/GebruikenVanBouwwerkenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het gebruiken van bouwwerken.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag400",
              "content": "vag400"
            }
          },
          {
            "label": "gelegenheid-tot-zwemmen-en-baden-biedenactiviteit",
            "term": "GelegenheidTotZwemmenEnBadenBiedenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/GelegenheidTotZwemmenEnBadenBiedenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het bieden van gelegenheid tot zwemmen en baden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag422",
              "content": "vag422"
            }
          },
          {
            "label": "grafactiviteit",
            "term": "Grafactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Grafactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die op een begraafplaats plaatsvinden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag414",
              "content": "vag414"
            }
          },
          {
            "label": "grondwateractiviteit",
            "term": "Grondwateractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Grondwateractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de grondwateractiviteit: gebruik en beïnvloeden van het grondwater waarbij de regels zien op het beschermen van het grondwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag229",
              "content": "vag229"
            }
          },
          {
            "label": "hemelwateractiviteit",
            "term": "Hemelwateractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Hemelwateractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het infiltreren, bergen en afvoeren van hemelwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag424",
              "content": "vag424"
            }
          },
          {
            "label": "herstructureringsactiviteit",
            "term": "Herstructureringsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Herstructureringsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het bundelen van diverse activiteiten in herstructureringsgebieden of anderszins voor herstructurering.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag209",
              "content": "vag209"
            }
          },
          {
            "label": "in-stand-houden-van-bouwwerkenactiviteit",
            "term": "InStandHoudenVanBouwwerkenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/InStandHoudenVanBouwwerkenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het in stand houden van een bouwwerk als bedoeld in de Omgevingswet.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag400",
              "content": "vag400"
            }
          },
          {
            "label": "jachtgeweeractiviteit",
            "term": "Jachtgeweeractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Jachtgeweeractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de jachtgeweeractiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "kampeeractiviteit",
            "term": "Kampeeractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Kampeeractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de kampeeractiviteit: activiteiten in het kader van het verblijven en/of overnachten in kampeermiddelen en het exploiteren van een kampeerterrein.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag418",
              "content": "vag418"
            }
          },
          {
            "label": "kapactiviteit",
            "term": "Kapactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Kapactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de kapactiviteit, zoals het kappen van bomen en het vellen en/of dunnen van houtopstanden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag404",
              "content": "vag404"
            }
          },
          {
            "label": "landinrichtingsactiviteit",
            "term": "Landinrichtingsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Landinrichtingsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de landinrichtingsactiviteit: activiteit die gevolgen heeft of kan hebben voor de uitvoering van een inrichtingsprogramma als bedoeld in artikel 3.14a Ow.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag410",
              "content": "vag410"
            }
          },
          {
            "label": "ligplaatsactiviteit",
            "term": "Ligplaatsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Ligplaatsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de ligplaatsactiviteit: het innemen van een ligplaats met een woonschip of ander schip, en daarmee verband houdende activiteiten.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag429",
              "content": "vag429"
            }
          },
          {
            "label": "lozingsactiviteit",
            "term": "Lozingsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Lozingsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de lozingsactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag424",
              "content": "vag424"
            }
          },
          {
            "label": "maatschappelijke activiteit",
            "term": "MaatschappelijkeActiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/MaatschappelijkeActiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het verrichten van maatschappelijke activiteiten en/of het exploiteren van een maatschappelijke instelling.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag414",
              "content": "vag414"
            }
          },
          {
            "label": "mijnbouwlocatieactiviteit",
            "term": "Mijnbouwlocatieactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Mijnbouwlocatieactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de mijnbouwlocatieactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag430",
              "content": "vag430"
            }
          },
          {
            "label": "milieubelastende activiteit",
            "term": "MilieubelastendeActiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/MilieubelastendeActiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de milieubelastende activiteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag425",
              "content": "vag425"
            }
          },
          {
            "label": "milieubelastende activiteit met beperkt effect",
            "term": "MilieubelastendeActiviteitMetBeperktEffect",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/MilieubelastendeActiviteitMetBeperktEffect",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die in beperkte mate nadelige gevolgen voor het milieu kunnen veroorzaken en doorgaans worden verricht bij een huishouden of bij het uitoefenen van beroep of bedrijf aan huis.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag417",
              "content": "vag417"
            }
          },
          {
            "label": "milieubelastende activiteit overig",
            "term": "MilieubelastendeActiviteitOverig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/MilieubelastendeActiviteitOverig",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over overige milieubelastende activiteiten.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag409",
              "content": "vag409"
            }
          },
          {
            "label": "moderniseringsactiviteit",
            "term": "Moderniseringsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Moderniseringsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het bundelen van diverse activiteiten in moderniseringslocaties: gebieden waar de aanwezige bouwwerken moeten worden gemoderniseerd of vervangen door gelijksoortige bebouwing.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag428",
              "content": "vag428"
            }
          },
          {
            "label": "monumentenactiviteit",
            "term": "Monumentenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Monumentenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die invloed hebben of kunnen hebben op een monument, niet zijnde een rijksmonument.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "natura 2000-activiteit",
            "term": "Natura2000Activiteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Natura2000Activiteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de Natura 2000-activiteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "natuuractiviteit",
            "term": "Natuuractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Natuuractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die de natuur betreffen, niet zijnde een Natura 2000-activiteit, flora- en fauna-activiteit of jachtgeweeractiviteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "noordzee-activiteit",
            "term": "NoordzeeActiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/NoordzeeActiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het bundelen van diverse activiteiten in de Noordzee, als bedoeld in hoofdstuk 7 Besluit activiteiten leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-293.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag424",
              "content": "vag424"
            }
          },
          {
            "label": "ontgrondingsactiviteit",
            "term": "Ontgrondingsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Ontgrondingsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de ontgrondingsactiviteit: een activiteit als bedoeld in artikel 5.1 lid 1 onder c Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag430",
              "content": "vag430"
            }
          },
          {
            "label": "ontspanningsactiviteit",
            "term": "Ontspanningsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Ontspanningsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten op het gebied van ontspanning.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag418",
              "content": "vag418"
            }
          },
          {
            "label": "opslagactiviteit",
            "term": "Opslagactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Opslagactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het opslaan van goederen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag403",
              "content": "vag403"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten die niet vallen onder een van de andere categorieën van de waardelijst Activiteitengroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag412",
              "content": "vag412"
            }
          },
          {
            "label": "parkeeractiviteit",
            "term": "Parkeeractiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Parkeeractiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het parkeren van voertuigen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag421",
              "content": "vag421"
            }
          },
          {
            "label": "planologische gebruiksactiviteit",
            "term": "PlanologischeGebruiksactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/PlanologischeGebruiksactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de planologische aspecten van het gebruik van gronden en bouwwerken; aspecten die geen betrekking hebben op het bouwen en instandhouden van bouwwerken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag423",
              "content": "vag423"
            }
          },
          {
            "label": "reclameactiviteit",
            "term": "Reclameactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Reclameactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het maken van handelsreclame m.b.v. een opschrift, aankondiging of afbeelding en het verspreiden van reclame- en promotiemateriaal.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag430",
              "content": "vag430"
            }
          },
          {
            "label": "recreatieactiviteit",
            "term": "Recreatieactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Recreatieactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over recreatie, waaronder begrepen het exploiteren van een recreatiebedrijf.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag418",
              "content": "vag418"
            }
          },
          {
            "label": "rijksmonumentenactiviteit",
            "term": "Rijksmonumentenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Rijksmonumentenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de rijksmonumentenactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "sloopactiviteit",
            "term": "Sloopactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Sloopactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het slopen van een bouwwerk.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag403",
              "content": "vag403"
            }
          },
          {
            "label": "sportactiviteit",
            "term": "Sportactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Sportactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het sporten, waaronder het exploiteren van een bedrijf waar gelegenheid wordt gegeven om te sporten.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag419",
              "content": "vag419"
            }
          },
          {
            "label": "standplaatsactiviteit",
            "term": "Standplaatsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Standplaatsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het innemen van een standplaats met een voertuig, kraam e.d. voor het verkopen, ten verkoop aanbieden of verspreiden van goederen dan wel met een woonwagen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag407",
              "content": "vag407"
            }
          },
          {
            "label": "stortingsactiviteit",
            "term": "Stortingsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Stortingsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de stortingsactiviteit: een activiteit als bedoeld in artikel 5.1 lid 1 onder d Ow en andere stortingsactiviteiten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag430",
              "content": "vag430"
            }
          },
          {
            "label": "toegangsactiviteit",
            "term": "Toegangsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Toegangsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten waarvoor op grond van een toegangsbeperkingsbesluit in een Natura 2000-gebied een gehele of gedeeltelijke beperking of verbod geldt dan wel die van een beperking of verbod zijn uitgezonderd.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag402",
              "content": "vag402"
            }
          },
          {
            "label": "uitritactiviteit",
            "term": "Uitritactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Uitritactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het aanleggen van een uitrit naar de openbare weg.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag421",
              "content": "vag421"
            }
          },
          {
            "label": "valkeniersactiviteit",
            "term": "Valkeniersactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Valkeniersactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de valkeniersactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          },
          {
            "label": "verrichten-van-werken-en-werkzaamhedenactiviteit",
            "term": "VerrichtenVanWerkenEnWerkzaamhedenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/VerrichtenVanWerkenEnWerkzaamhedenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het verrichten van werken, geen bouwwerk zijnde, en werkzaamheden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag403",
              "content": "vag403"
            }
          },
          {
            "label": "wateronttrekkingsactiviteit",
            "term": "Wateronttrekkingsactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Wateronttrekkingsactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over de wateronttrekkingsactiviteit als bedoeld in artikel 5.1 Ow en de bijbehorende begrippenbijlage.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag424",
              "content": "vag424"
            }
          },
          {
            "label": "waterstaatswerkenactiviteit",
            "term": "Waterstaatswerkenactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Waterstaatswerkenactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten m.b.t. een waterstaatswerk, niet zijnde een beperkingengebiedactiviteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag424",
              "content": "vag424"
            }
          },
          {
            "label": "wegactiviteit",
            "term": "Wegactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Wegactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het verrichten van werken, geen bouwwerk zijnde, en werkzaamheden t.b.v. een weg dan wel het plaatsen van voorwerpen op of aan een weg.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag421",
              "content": "vag421"
            }
          },
          {
            "label": "werelderfgoedactiviteit",
            "term": "Werelderfgoedactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Werelderfgoedactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over activiteiten m.b.t. werelderfgoed: cultureel of natuurlijk erfgoed dat is opgenomen in de Lijst van het Werelderfgoed.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "woonactiviteit",
            "term": "Woonactiviteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteit/id/concept/Woonactiviteit",
            "definitie": "Waarde voor attribuut groep bij het object Activiteit voor het vastleggen van een gebied waar regels gelden over het wonen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag426",
              "content": "vag426"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "activiteit",
          "term": "Activiteit",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteit",
          "omschrijving": "Betreft begrippen gerelateerd aan de menselijke handelingssfeer.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "activiteitregelkwalificatie",
      "titel": "Activiteitregelkwalificatie",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Activiteitregelkwalificatie",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut activiteitregelkwalificatie, dat gebruikt moet worden indien type Juridische regel = Regel voor iedereen én annotatie Activiteit en ActiviteitLocatieaanduiding is toegepast.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "anders geduid",
            "term": "AndersGeduid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/AndersGeduid",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie die gekozen moet worden wanneer geen van de andere waarden van toepassing is.",
            "toelichting": "Te gebruiken wanneer geen van de andere waarden van toepassing is, of wanneer een combinatie van andere waarden van toepassing is, bijvoorbeeld wanneer in één Juridische regel voor een activiteit condities zijn genoemd waaronder een meldingsplicht of juist een vergunningplicht geldt.",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "gebod",
            "term": "Gebod",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Gebod",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die een plicht oplegt om een activiteit te verrichten of juist na te laten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "informatieplicht",
            "term": "Informatieplicht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Informatieplicht",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die een plicht oplegt om bepaalde informatie te verstrekken.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "meldingsplicht",
            "term": "Meldingsplicht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Meldingsplicht",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die verbiedt om zonder voorafgaande melding activiteit te verrichten.",
            "toelichting": "Een regel als hier bedoeld zal vaak een verbod bevatten om zonder voorafgaande melding een bepaalde activiteit te verrichten. Dat is een juridisch sluitende formulering voor een meldingsplicht. Voor zo'n regel is deze waarde bedoeld. Het is niet de bedoeling om dan zowel de activiteitregelkwalificatie meldingsplicht als de activiteitregelkwalificatie verbod te gebruiken.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "toegestaan",
            "term": "Toegestaan",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Toegestaan",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die bepaalt dat het verrichten van een activiteit is toegestaan, zonder dat vergunning of melding vereist is.",
            "toelichting": "Het gaat er om dat de activiteit zonder voorwaarden verricht mag worden. Daarbij kan expliciet in de Juridische regel bepaald zijn dat geen vergunning of melding vereist is, maar dat hoeft niet.",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "verbod",
            "term": "Verbod",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Verbod",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die absoluut verbod bevat om een bepaalde activiteit te verrichten.",
            "toelichting": "Alleen te gebruiken voor een absoluut verbod, niet voor een verbod om zonder omgevingsvergunning of zonder voorafgaande melding een activiteit te verrichten.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vergunningplicht",
            "term": "Vergunningplicht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Vergunningplicht",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die verbiedt om zonder omgevingsvergunning activiteit te verrichten.",
            "toelichting": "Een regel als hier bedoeld zal vaak een verbod bevatten om zonder omgevingsvergunning een bepaalde activiteit te verrichten. Dat is een juridisch sluitende formulering voor een vergunningplicht. Voor zo'n regel is deze waarde bedoeld. Het is niet de bedoeling om dan zowel de activiteitregelkwalificatie vergunningplicht als de activiteitregelkwalificatie verbod te gebruiken.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "zorgplicht",
            "term": "Zorgplicht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/activiteitregelkwalificatie/id/concept/Zorgplicht",
            "definitie": "Waarde voor attribuut activiteitregelkwalificatie voor regel die bepaalt dat bij het verrichten van activiteiten voldoende zorg in acht genomen moet worden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "activiteitregelkwalificatie",
          "term": "Activiteitregelkwalificatie",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Activiteitregelkwalificatie",
          "omschrijving": "Begrippen die een kwalificatie geven van regels over activiteiten.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "adressaat",
      "titel": "Adressaat",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Adressaat",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut instructieregelTaakuitoefening, te gebruiken indien type Juridische regel = Instructieregel en de instructieregel gaat over taakuitoefening.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "beheerder spoor",
            "term": "BeheerderSpoor",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/BeheerderSpoor",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "faunabeheereenheid",
            "term": "Faunabeheereenheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Faunabeheereenheid",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "gemeentebestuur",
            "term": "Gemeentebestuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Gemeentebestuur",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "korpschef",
            "term": "Korpschef",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Korpschef",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "provinciebestuur",
            "term": "Provinciebestuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Provinciebestuur",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "rijk",
            "term": "Rijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Rijk",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "waterschapsbestuur",
            "term": "Waterschapsbestuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Waterschapsbestuur",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "wildbeheereenheid",
            "term": "Wildbeheereenheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Wildbeheereenheid",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "zonebeheerder",
            "term": "Zonebeheerder",
            "uri": "http://standaarden.omgevingswet.overheid.nl/adressaat/id/concept/Zonebeheerder",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "adressaat",
          "term": "Adressaat",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Adressaat",
          "omschrijving": "Begrippen die het type bestuurslaag of organisatie aanduiden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "beperkingengebiedgroep",
      "titel": "Beperkingengebiedgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Beperkingengebiedgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Beperkingengebied, dat zorgt voor filteren en weergave van de symbolisatie van Beperkingengebied op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "installatie in waterstaatswerk",
            "term": "InstallatieInWaterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/InstallatieInWaterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een installatie in een waterstaatswerk gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag222",
              "content": "vag222"
            }
          },
          {
            "label": "luchthaven",
            "term": "Luchthaven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Luchthaven",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een luchthaven gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag228",
              "content": "vag228"
            }
          },
          {
            "label": "molen",
            "term": "Molen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Molen",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een molen gelden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag206",
              "content": "vag206"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege vanwege de aanwezigheid van een werk of object gelden, die niet vallen onder een van de overige waarden.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag221",
              "content": "vag221"
            }
          },
          {
            "label": "spoorweg",
            "term": "Spoorweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Spoorweg",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een spoorweg gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag215",
              "content": "vag215"
            }
          },
          {
            "label": "waterstaatswerk",
            "term": "Waterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Waterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een waterstaatswerk gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag220",
              "content": "vag220"
            }
          },
          {
            "label": "weg",
            "term": "Weg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/beperkingengebied/id/concept/Weg",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Beperkingengebied voor het aanwijzen van een gebied waar beperkingen vanwege een weg gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag214",
              "content": "vag214"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "beperkingengebied",
          "term": "Beperkingengebied",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Beperkingengebied",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van beperkingengebieden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "bodemgroep",
      "titel": "Bodemgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Bodemgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Bodem, dat zorgt voor filteren en weergave van de symbolisatie van Bodem op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bodembeheergebied",
            "term": "Bodembeheergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Bodembeheergebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waar met het oog op de bodemkwaliteit voor het op of in de bodem brengen van grond of baggerspecie lokale maximum waarden voor stoffen gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "bodemdalingsgebied",
            "term": "Bodemdalingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Bodemdalingsgebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waar specifieke regels of beleid in verband met de daar optredende bodemdaling gelden.",
            "toelichting": "Er zijn gebieden waar reguliere maatregelen van  het waterschap onvoldoende zijn om de gevolgen van bodemdaling op te vangen. Een gecombineerde aanpak met extra maatregelen gericht op watersysteem en landgebruik kan dan nodig zijn.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "mijnsteengebied",
            "term": "Mijnsteengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Mijnsteengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied voor de toepassing van mijnsteen.",
            "toelichting": "Dit gebied ligt altijd binnen een herkomstgebied voor mijnsteen.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "ontgrondingsgebied",
            "term": "Ontgrondingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Ontgrondingsgebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waar regels of beleid gelden voor activiteiten gericht op het permanent dan wel tijdelijk verlagen van de hoogteligging van het maaiveld of het verdiepen van de waterbodem.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "stortplaats (gesloten)",
            "term": "StortplaatsGesloten",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/StortplaatsGesloten",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waar een gesloten stortplaats aanwezig is of een stortplaats in de fase van afwerking verkeert.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg003",
              "content": "vsg003"
            }
          },
          {
            "label": "stortplaats (open)",
            "term": "StortplaatsOpen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/StortplaatsOpen",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied voor de exploitatie van een stortplaats.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg107",
              "content": "vsg107"
            }
          },
          {
            "label": "zandwinningsgebied",
            "term": "Zandwinningsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bodem/id/concept/Zandwinningsgebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Bodem voor het aanwijzen van een gebied waar regels of beleid voor zandwinning gelden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "bodem",
          "term": "Bodem",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bodem",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van bodem.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "bouwgroep",
      "titel": "Bouwgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Bouwgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Bouw, dat zorgt voor filteren en weergave van de symbolisatie van Bouw op de kaart.",
      "toelichting": "Alleen te gebruiken in het omgevingsplan.",
      "waarden": {
        "waarde": [
          {
            "label": "bouwvlak",
            "term": "Bouwvlak",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bouw/id/concept/Bouwvlak",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Bouw voor het aanwijzen van een gebied waar het bouwen en instandhouden van bepaalde bouwwerken is toegelaten.",
            "toelichting": "Alleen te gebruiken in het omgevingsplan.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog000",
              "content": "vog000"
            }
          },
          {
            "label": "rooilijn",
            "term": "Rooilijn",
            "uri": "http://standaarden.omgevingswet.overheid.nl/bouw/id/concept/Rooilijn",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Bouw voor het aanwijzen van een lijn of gevel die in acht moet worden genomen bij het situeren van bouwwerken.",
            "toelichting": "Alleen te gebruiken in het omgevingsplan.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "lsh025",
              "content": "lsh025"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "bouw",
          "term": "Bouw",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Bouw",
          "omschrijving": "Begrippen gerelateerd aan regels over het situeren van bouwwerken in het omgevingsplan.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "defensiegroep",
      "titel": "Defensiegroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Defensiegroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Defensie, dat zorgt voor filteren en weergave van de symbolisatie van Defensie op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/defensie/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Defensie voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "militair terrein",
            "term": "MilitairTerrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/defensie/id/concept/MilitairTerrein",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Defensie voor het aanwijzen van een gebied als militair terrein of terrein met een militair object.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "militaire laagvliegroute",
            "term": "MilitaireLaagvliegroute",
            "uri": "http://standaarden.omgevingswet.overheid.nl/defensie/id/concept/MilitaireLaagvliegroute",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Defensie voor het aanwijzen van een gebied waar zich een militaire laagvliegroute voor jacht- en transportvliegtuigen bevindt.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "radarverstoringsgebied",
            "term": "Radarverstoringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/defensie/id/concept/Radarverstoringsgebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Defensie voor het aanwijzen van een gebied waar bouwwerken het radarbeeld kunnen verstoren.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "verstoringsgebied militaire zend- en ontvangstinstallatie",
            "term": "VerstoringsgebiedMilitaireZendEnOntvangstinstallatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/defensie/id/concept/VerstoringsgebiedMilitaireZendEnOntvangstinstallatie",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Defensie voor het aanwijzen van een gebied waar bouwwerken een militaire zend- en ontvangstinstallatie kunnen verstoren.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "defensie",
          "term": "Defensie",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Defensie",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van defensie.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "eenheid",
      "titel": "Eenheid",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Eenheid",
      "type": "uitbreidbaar",
      "omschrijving": "Waardelijst voor attribuut eenheid, dat aangeeft in welke grootheid een kwantitatieve waarde wordt uitgedrukt.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "a-gewogen gemiddelde geluidsniveau",
            "term": "AGewogenGemiddeldeGeluidsniveau",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/AGewogenGemiddeldeGeluidsniveau",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "a-gewogen gemiddelde geluidsniveau avondperiode",
            "term": "AGewogenGemiddeldeGeluidsniveauAvondperiode",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/AGewogenGemiddeldeGeluidsniveauAvondperiode",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "a-gewogen gemiddelde geluidsniveau dagperiode",
            "term": "AGewogenGemiddeldeGeluidsniveauDagperiode",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/AGewogenGemiddeldeGeluidsniveauDagperiode",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "a-gewogen gemiddelde geluidsniveau nachtperiode",
            "term": "AGewogenGemiddeldeGeluidsniveauNachtperiode",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/AGewogenGemiddeldeGeluidsniveauNachtperiode",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal",
            "term": "Aantal",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Aantal",
            "definitie": "Waarde voor attribuut eenheid bij de objecten Omgevingsnorm en Omgevingswaarde, die aangeeft dat een kwantitatieve waarde in een aantal wordt uitgedrukt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bouwlaag",
            "term": "Bouwlaag",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Bouwlaag",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "centimeter",
            "term": "Centimeter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Centimeter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "decibel",
            "term": "Decibel",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Decibel",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "decibel met a-weging",
            "term": "DecibelMetAWeging",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/DecibelMetAWeging",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "gemiddeld geluidsniveau over het etmaal",
            "term": "GemiddeldGeluidsniveauOverHetEtmaal",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/GemiddeldGeluidsniveauOverHetEtmaal",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "graad (hoek)",
            "term": "GraadHoek",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/GraadHoek",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "graad celsius",
            "term": "GraadCelsius",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/GraadCelsius",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "kilogram",
            "term": "Kilogram",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Kilogram",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "kilometer",
            "term": "Kilometer",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Kilometer",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "kilopascal",
            "term": "Kilopascal",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Kilopascal",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "kubieke meter",
            "term": "KubiekeMeter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/KubiekeMeter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "liter",
            "term": "Liter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Liter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "meter",
            "term": "Meter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Meter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "microgram per kilogram",
            "term": "MicrogramPerKilogram",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/MicrogramPerKilogram",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "microgram per kubieke meter",
            "term": "MicrogramPerKubiekeMeter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/MicrogramPerKubiekeMeter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "microgram per liter",
            "term": "MicrogramPerLiter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/MicrogramPerLiter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "milligram",
            "term": "Milligram",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Milligram",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "milligram per liter",
            "term": "MilligramPerLiter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/MilligramPerLiter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "millimeter",
            "term": "Millimeter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Millimeter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minuut",
            "term": "Minuut",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Minuut",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "nog toe te voegen",
            "term": "NogToeTeVoegen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/NogToeTeVoegen",
            "definitie": "Waarde voor attribuut eenheid voor de gegevensgroep Normwaarde bij de objecten Omgevingswaarde en Omgevingsnorm die gebruikt kan worden wanneer een bevoegd gezag een eigen waarde wil gebruiken.",
            "toelichting": "Deze waarde is toegevoegd om, zolang de DSO-systemen nog niet met uitbreidbare waardelijsten kunnen omgaan, duidelijk te kunnen maken dat het de bedoeling is een eigen waarde te gebruiken. (NB: Het bevoegd gezag kan een mail sturen aan omgevingswet@geonovum.nl met het verzoek om de betreffende waarde aan de waardelijst toe te voegen).",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "odour unit",
            "term": "OdourUnit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/OdourUnit",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "procent",
            "term": "Procent",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Procent",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "seconde",
            "term": "Seconde",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Seconde",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "uur",
            "term": "Uur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Uur",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vierkante kilometer",
            "term": "VierkanteKilometer",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/VierkanteKilometer",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vierkante meter",
            "term": "VierkanteMeter",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/VierkanteMeter",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "watt",
            "term": "Watt",
            "uri": "http://standaarden.omgevingswet.overheid.nl/eenheid/id/concept/Watt",
            "definitie": "",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "eenheid",
          "term": "Eenheid",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Eenheid",
          "omschrijving": "Begrippen die eenheden aanduiden waarin een kwantitatieve waarde wordt uitgedrukt.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "energievoorzieninggroep",
      "titel": "Energievoorzieninggroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Energievoorzieninggroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening, dat zorgt voor filteren en weergave van de symbolisatie van Energievoorziening op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bodemenergiegebied",
            "term": "Bodemenergiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Bodemenergiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met bodemenergiewinning.",
            "toelichting": "Een duurzame techniek waarmee energie uit de bodem kan worden gewonnen. Bij bodemenergie wordt gebruik gemaakt van de warmte die van nature aanwezig is in de bodem en het grondwater. Daarmee is bodemenergie een vorm van hernieuwbare energie.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "energieproductiegebied",
            "term": "Energieproductiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Energieproductiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met de productie van energie.",
            "toelichting": "Hier vallen alle vormen van energieproductie onder (kolencentrales, windturbines enz enz).",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "grootschalige elektriciteitsopwekking",
            "term": "GrootschaligeElektriciteitsopwekking",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/GrootschaligeElektriciteitsopwekking",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met grootschalige installaties voor de electriciteitsopwekking.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "hoogspanningsverbinding",
            "term": "Hoogspanningsverbinding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Hoogspanningsverbinding",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met hoogspanningsverbinding.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "kernenergiegebied",
            "term": "Kernenergiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Kernenergiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met kernenergiewinning.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "windturbinegebied",
            "term": "Windturbinegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/Windturbinegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met energiewinning d.m.v. windturbines.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt112",
              "content": "vsgt112"
            }
          },
          {
            "label": "zonne-energiegebied",
            "term": "ZonneEnergiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/energievoorziening/id/concept/ZonneEnergiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Energievoorziening voor het aanwijzen van een gebied in verband met energiewinning d.m.v. grootschalige installaties voor de winning van zonne-energie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt126",
              "content": "vsgt126"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "energievoorziening",
          "term": "Energievoorziening",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Energievoorziening",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van energievoorziening.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "erfgoedgroep",
      "titel": "Erfgoedgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Erfgoedgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed, dat zorgt voor filteren en weergave van de symbolisatie van Erfgoed op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aardkundig waardevol gebied",
            "term": "AardkundigWaardevolGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/AardkundigWaardevolGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied specifieke landschappelijke kenmerken heeft die iets vertellen over de natuurlijke ontstaanswijze van het gebied.",
            "toelichting": "Gebied met specifieke landschappelijke kenmerken die iets vertellen over de natuurlijke ontstaanswijze van het gebied omdat ze nog in oorspronkelijke staat zijn. De bescherming van aardkundige waarden is belangrijk omdat deze onvervangbaar zijn. Voorbeelden van aardkundige waarden zijn: stuifzandgebieden, dekzandruggen, hoogveengebieden en stuwwallen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag506",
              "content": "vag506"
            }
          },
          {
            "label": "archeologie",
            "term": "Archeologie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/Archeologie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied van belang is vanwege de daar (mogelijk) aanwezige overblijfselen, voorwerpen of andere sporen van menselijke aanwezigheid in het verleden.",
            "toelichting": "Archeologie gaat over sporen en resten van menselijke aanwezigheid vanaf 300.000 jaar geleden in de bodem en onder water.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt106",
              "content": "vsgt106"
            }
          },
          {
            "label": "beschermd monument",
            "term": "BeschermdMonument",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/BeschermdMonument",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied, bouwwerk of object van een zodanige historische waarde is dat het om die reden beschermd is.",
            "toelichting": "Een bouwwerk van historische waarde dat om die reden beschermd is.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg106",
              "content": "vsg106"
            }
          },
          {
            "label": "buitenplaats",
            "term": "Buitenplaats",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/Buitenplaats",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied een historische buitenplaats is: een aangelegd geheel bestaande uit (land- of buiten-)huis of kasteel met bijgebouwen, omgeven door tuinen en/of park.",
            "toelichting": "Buitenplaatsen bestaan uit een huis met bijgebouwen en een daaromheen aangelegde tuin- of park die onlosmakelijk met elkaar zijn verbonden.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "cultureel erfgoed",
            "term": "CultureelErfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/CultureelErfgoed",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied cultuurhistorisch waardevol is.",
            "toelichting": "De overblijfselen van de geschiedenis van de door de mens gemaakte en beïnvloede leefomgeving. Zoals bijv. bouwwerken, maar ook landschappelijke patronen (wallen, hagen, akkers, polders), etc.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag006",
              "content": "vag006"
            }
          },
          {
            "label": "cultuurhistorisch beschermd landschap",
            "term": "CultuurhistorischBeschermdLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/CultuurhistorischBeschermdLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een (weinig bebouwd) gebied een zodanige erfgoedwaarde bezit dat het van algemeen belang is.",
            "toelichting": "Een gebied dat weinig bebouwd is en erfgoedwaarde bezit, waardoor het van algemeen belang is.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag106",
              "content": "vag106"
            }
          },
          {
            "label": "cultuurhistorisch waardevol gebied",
            "term": "CultuurhistorischWaardevolGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/CultuurhistorischWaardevolGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied in of buiten een stad of dorp een bijzonder cultuurhistorisch karakter heeft vanwege de historische samenhang.",
            "toelichting": "Een gebied in of buiten een stad of dorp met een bijzonder cultuurhistorisch karakter vanwege de historische samenhang.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag406",
              "content": "vag406"
            }
          },
          {
            "label": "linie",
            "term": "Linie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/Linie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat in een gebied verdedigingslijn aanwezig is: een aaneengesloten geheel van versterkte punten in het terrein.",
            "toelichting": "Een verdedigingslijn, bestaande uit een aaneengesloten geheel van versterkte punten in het terrein.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt006",
              "content": "vsgt006"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Erfgoed voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "werelderfgoed",
            "term": "Werelderfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/erfgoed/id/concept/Werelderfgoed",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Erfgoed dat aangeeft dat een gebied of object een monument is dat van belang is voor de wereldgemeenschap.",
            "toelichting": "Werelderfgoederen zijn monumenten die zo belangrijk zijn voor de wereldgemeenschap dat we ze veilig aan toekomstige generaties willen doorgeven. Dit kunnen zowel culturele als natuurlijke monumenten zijn of een combinatie van beide.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag306",
              "content": "vag306"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "erfgoed",
          "term": "Erfgoed",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Erfgoed",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van erfgoed.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "externe veiligheidgroep",
      "titel": "ExterneVeiligheidgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/ExterneVeiligheidgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid, dat zorgt voor filteren en weergave van de symbolisatie van Externe veiligheid op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aandachtsgebied externe veiligheid",
            "term": "AandachtsgebiedExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/AandachtsgebiedExterneVeiligheid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid dat een gebied rond een activiteit met externe veiligheidsrisico\u2019s aanwijst waarbinnen zich bij een incident levensbedreigende gevolgen voor personen in een gebouw kunnen voordoen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "belemmeringengebied buisleidingen",
            "term": "BelemmeringengebiedBuisleidingen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/BelemmeringengebiedBuisleidingen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid voor het aanwijzen van een gebied aan weerszijden van een buisleiding als bedoeld in artikel 3.101 van het Besluit activiteiten leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "gebied met ontplofbare stoffen en explosieven",
            "term": "GebiedMetOntplofbareStoffenEnExplosieven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/GebiedMetOntplofbareStoffenEnExplosieven",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid voor het aanwijzen van een gebied als bedoeld in de bijlagen VIII, IX en X Besluit kwaliteit leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype ExterneVeiligheid voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "plaatsgebonden risico",
            "term": "PlaatsgebondenRisico",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/PlaatsgebondenRisico",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid dat een gebied rond een activiteit met externe veiligheidsrisico\u2019s aanwijst waarbinnen het plaatsgebonden risico 1 op de 1.000.000 per jaar of hoger bedraagt.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg012",
              "content": "vsg012"
            }
          },
          {
            "label": "risicogebied",
            "term": "Risicogebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/Risicogebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid voor het aanwijzen van een gebied als risicogebied externe veiligheid als bedoeld in artikel 5.16 Besluit kwaliteit leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "voorschriftengebied",
            "term": "Voorschriftengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/externeveiligheid/id/concept/Voorschriftengebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Externe veiligheid voor het aanwijzen van een gebied als aandachtsgebied externe veiligheid als bedoeld in artikel 5.14 Besluit kwaliteit leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "externe veiligheid",
          "term": "ExterneVeiligheid",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/ExterneVeiligheid",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van externe veiligheid.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "functiegroep",
      "titel": "Functiegroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Functiegroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Functie, dat zorgt voor filteren en weergave van de symbolisatie van Functie op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aandachtsgebied",
            "term": "Aandachtsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Aandachtsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen en begrenzen van en stellen van regels over aandachtsgebieden, niet zijnde aandachtsgebieden externe veiligheid, geluid of lucht.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "aandachtsgebied externe veiligheid",
            "term": "AandachtsgebiedExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/AandachtsgebiedExterneVeiligheid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functiet.b.v. het aanwijzen en begrenzen van en stellen van regels over aandachtsgebieden externe veiligheid.",
            "toelichting": "Groep te gebruiken voor bijvoorbeeld explosieaandachtsgebied.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "aandachtsgebied geluid",
            "term": "AandachtsgebiedGeluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/AandachtsgebiedGeluid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen en begrenzen van en stellen van regels over een geluidaandachtsgebied.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "aandachtsgebied luchtkwaliteit",
            "term": "AandachtsgebiedLuchtkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/AandachtsgebiedLuchtkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen en begrenzen van en stellen van regels over een aandachtsgebied m.b.t. luchtkwaliteit.",
            "toelichting": "Groep te gebruiken voor bijvoorbeeld aandachtsgebied fijnstof.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt019",
              "content": "vsgt019"
            }
          },
          {
            "label": "aardkundige waarde",
            "term": "AardkundigeWaarde",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/AardkundigeWaarde",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden met aardkundige waarden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "agrarisch",
            "term": "Agrarisch",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Agrarisch",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over agrarisch gebruik van gronden en gebouwen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "archeologie",
            "term": "Archeologie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Archeologie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over de bescherming van (mogelijk) aanwezige archeologische waarden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg010",
              "content": "vsg010"
            }
          },
          {
            "label": "bebouwingscontour",
            "term": "Bebouwingscontour",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bebouwingscontour",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van bebouwd gebied en daarover stellen van regels.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "bebouwingscontour houtkap",
            "term": "BebouwingscontourHoutkap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BebouwingscontourHoutkap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. voor het in de vorm van een Functie bij omgevingsplan aanwijzen van het gebied waar de regels van afdeling 11.3 Besluit activiteiten leefomgeving over houtopstanden niet van toepassing zijn.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg019",
              "content": "vsg019"
            }
          },
          {
            "label": "bebouwingscontour jacht",
            "term": "BebouwingscontourJacht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BebouwingscontourJacht",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. voor het in de vorm van een Functie bij omgevingsplan aanwijzen van het gebied dat ingevolge artikel 5.165a Besluit kwaliteit leefomgeving bij omgevingsplan is aangewezen in verband met de toepassing van regels over de jacht van het Besluit activiteiten leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "bedrijf",
            "term": "Bedrijf",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bedrijf",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over bedrijfsmatig gebruik van gronden en gebouwen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg003",
              "content": "vsg003"
            }
          },
          {
            "label": "bedrijventerrein",
            "term": "Bedrijventerrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bedrijventerrein",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over bedrijventerreinen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "belemmeringengebied",
            "term": "Belemmeringengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Belemmeringengebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van het gebied aan weerszijden van een buisleiding.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "beschermd gezicht",
            "term": "BeschermdGezicht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BeschermdGezicht",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen, begrenzen en stellen van regels ter bescherming van beschermde stads- en dorpsgezichten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "beschermd landschap",
            "term": "BeschermdLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BeschermdLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van beschermde landschappen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "beschermd monument",
            "term": "BeschermdMonument",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BeschermdMonument",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen, begrenzen en stellen van regels ter bescherming van monumenten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "beschermde boom",
            "term": "BeschermdeBoom",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/BeschermdeBoom",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen, begrenzen en stellen van regels ter bescherming van bomen met een bijzondere waarde.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "bodembeheergebied",
            "term": "Bodembeheergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bodembeheergebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen, begrenzen en stellen van regels over gebieden voor het toepassen van grond, baggerspecie of (vermengde) mijnsteen in of op de landbodem.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg010",
              "content": "vsg010"
            }
          },
          {
            "label": "bodemdalingsgebied",
            "term": "Bodemdalingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bodemdalingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebieden waar bodemdaling optreedt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg010",
              "content": "vsg010"
            }
          },
          {
            "label": "bodemenergiegebied",
            "term": "Bodemenergiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Bodemenergiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over het winen van bodemenergie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "buitenplaats",
            "term": "Buitenplaats",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Buitenplaats",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen, begrenzen en stellen van regels ter bescherming van monumenten in de vorm van een historische buitenplaats: een aangelegd geheel bestaande uit (land- of buiten-)huis of kasteel met bijgebouwen, omgeven door tuinen en/of park.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "centrumgebied",
            "term": "Centrumgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Centrumgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over het toegelaten gebruik in een stads- of dorpscentrum.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg005",
              "content": "vsg005"
            }
          },
          {
            "label": "concentratiegebied",
            "term": "Concentratiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Concentratiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. in de vorm van een functie aanwijzen, begrenzen en stellen van regels van een concentratiegebeid geur waar andere standaard- en grenswaarden gelden voor de geurhinder afkomstig van veehouderijen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "cultuur",
            "term": "Cultuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Cultuur",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. culturele activiteiten en culturele instellingen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "cultuurhistorisch beschermd landschap",
            "term": "CultuurhistorischBeschermdLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/CultuurhistorischBeschermdLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van landschappen vanwege hun cultuurhistorische betekenis.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "cultuurhistorisch waardevol gebied",
            "term": "CultuurhistorischWaardevolGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/CultuurhistorischWaardevolGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van cultuurhistorisch waardevol gebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "dagrecreatie",
            "term": "Dagrecreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Dagrecreatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. dagrecreatieve activiteiten zonder overnachting.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg018",
              "content": "vsg018"
            }
          },
          {
            "label": "detailhandel",
            "term": "Detailhandel",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Detailhandel",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. detailhandel.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "dienstverlening",
            "term": "Dienstverlening",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Dienstverlening",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. dienstverlening.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg008",
              "content": "vsg008"
            }
          },
          {
            "label": "duingebied",
            "term": "Duingebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Duingebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van duinen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "duinwatergebied",
            "term": "Duinwatergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Duinwatergebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden waar duinwater wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "energieproductiegebied",
            "term": "Energieproductiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Energieproductiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden in verband met de productie van energie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "erfgoed",
            "term": "Erfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Erfgoed",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van cultureel erfgoed.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "gaswinning",
            "term": "Gaswinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Gaswinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden waar gas wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "gesloten stortplaats",
            "term": "GeslotenStortplaats",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/GeslotenStortplaats",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. een gesloten stortplaats of een stortplaats in de fase van afwerking.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg003",
              "content": "vsg003"
            }
          },
          {
            "label": "glastuinbouw",
            "term": "Glastuinbouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Glastuinbouw",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. de teelt of veredeling van gewassen met behulp van een glasopstand.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "groen",
            "term": "Groen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Groen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden t.b.v. groenvoorzieningen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg010",
              "content": "vsg010"
            }
          },
          {
            "label": "grondwaterbeschermingsgebied",
            "term": "Grondwaterbeschermingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Grondwaterbeschermingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden met het oog op de bescherming van de grondwaterkwaliteit in verband met de winning van drinkwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          },
          {
            "label": "grootschalige elektriciteitsopwekking",
            "term": "GrootschaligeElektriciteitsopwekking",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/GrootschaligeElektriciteitsopwekking",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor de electriciteitsopwekking.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "herstructureringsgebied",
            "term": "Herstructureringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Herstructureringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. de herstructurering van dat gebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "hoogspanningsverbinding",
            "term": "Hoogspanningsverbinding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Hoogspanningsverbinding",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over het gebruik van gronden en gebouwen t.b.v. hoogspanningsverbindingen, inclusief de bescherming van het gebied aan weerszijden van de hoogspanningskabels en/of -leidingen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "horeca",
            "term": "Horeca",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Horeca",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. horeca.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "industrie",
            "term": "Industrie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Industrie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. industriële bedrijvigheid.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "industrieterrein",
            "term": "Industrieterrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Industrieterrein",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. horeca.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "infrastructuur",
            "term": "Infrastructuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Infrastructuur",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. een terrein met industriële bedrijvigheid.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "intrekgebied",
            "term": "Intrekgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Intrekgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in een intrekgebied ter bescherming van de drinkwaterwinning.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "kantoor",
            "term": "Kantoor",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Kantoor",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. kantoren.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg012",
              "content": "vsg012"
            }
          },
          {
            "label": "kantoorlocatie",
            "term": "Kantoorlocatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Kantoorlocatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. een gebied met meerdere kantoren.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg012",
              "content": "vsg012"
            }
          },
          {
            "label": "landbouw",
            "term": "Landbouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Landbouw",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. landbouw.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "landelijk gebied",
            "term": "LandelijkGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/LandelijkGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in landelijk gebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "luchthaven",
            "term": "Luchthaven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Luchthaven",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. een luchthaven.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "luchtvaart",
            "term": "Luchtvaart",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Luchtvaart",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van gebieden en het stellen van regels i.v.m. de luchtvaart.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "maatschappelijk",
            "term": "Maatschappelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Maatschappelijk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. maatschappelijke voorzieningen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "mergelwinning",
            "term": "Mergelwinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Mergelwinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. de winning van mergel.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg013",
              "content": "vsg013"
            }
          },
          {
            "label": "militair terrein",
            "term": "MilitairTerrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/MilitairTerrein",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.p.v. een militair terrein.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "militaire laagvliegroute",
            "term": "MilitaireLaagvliegroute",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/MilitaireLaagvliegroute",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels i.v.m. een militaire laagvliegroute voor jacht- en transportvliegtuigen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "moderniseringslocatie",
            "term": "Moderniseringslocatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Moderniseringslocatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen van en stellen van regels over gebieden waar de aanwezige bouwwerken moeten worden gemoderniseerd of vervangen door gelijksoortige bebouwing.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "molen",
            "term": "Molen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Molen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. een molen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "oliewinning",
            "term": "Oliewinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Oliewinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. de winning van olie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "ontgrondingsgebied",
            "term": "Ontgrondingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Ontgrondingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van gebieden en stellen van regels gericht op het permanent dan wel tijdelijk verlagen van de hoogteligging van het maaiveld of het verdiepen van de waterbodem.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "ontspanning",
            "term": "Ontspanning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Ontspanning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor ontspanningsvoorzieningen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg018",
              "content": "vsg018"
            }
          },
          {
            "label": "ontwikkeling landelijke functies",
            "term": "OntwikkelingLandelijkeFuncties",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/OntwikkelingLandelijkeFuncties",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van gebieden en stellen van regels i.v.m. de ontwikkeling van nieuwe landelijke functies.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "ontwikkeling stedelijke functies",
            "term": "OntwikkelingStedelijkeFuncties",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/OntwikkelingStedelijkeFuncties",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van gebieden en stellen van regels i.v.m. de ontwikkeling van nieuwe stedelijke functies.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg025",
              "content": "vsg025"
            }
          },
          {
            "label": "open landschap",
            "term": "OpenLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/OpenLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen ter bescherming van de openheid van het landschap.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "open stortplaats",
            "term": "OpenStortplaats",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/OpenStortplaats",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. een stortplaats in exploitatie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "openbaar gebied",
            "term": "OpenbaarGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/OpenbaarGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en bouwwerken in het openbare gebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor die functies die niet onder een andere Functiegroep vallen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "radarverstoringsgebied",
            "term": "Radarverstoringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Radarverstoringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebied waar bouwwerken het radarbeeld kunnen verstoren.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "recreatie",
            "term": "Recreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Recreatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor recreatie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg018",
              "content": "vsg018"
            }
          },
          {
            "label": "recreatief routenetwerk",
            "term": "RecreatiefRoutenetwerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/RecreatiefRoutenetwerk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en bescherming van recreatieve routenetwerken.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor langeafstandsfietsroutes, langeafstandswandelrouteks.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "reserveringsgebied",
            "term": "Reserveringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Reserveringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van gebieden die zijn gereserveerd voor de aanleg van werken en het stellen van regels over activiteiten die de aanleg zouden bemoeilijken.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor reserveringsgebied buisleiding, reserveringsgebeid voor een hoofdspoorweg.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg027",
              "content": "vsg027"
            }
          },
          {
            "label": "risicogebied externe veiligheid",
            "term": "RisicogebiedExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/RisicogebiedExterneVeiligheid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. het toelaten van bepaalde activiteiten met een externe-veiligheidsrisico.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg011",
              "content": "vsg011"
            }
          },
          {
            "label": "schaliegaswinning",
            "term": "Schaliegaswinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Schaliegaswinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden waar schaliegas wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "spoorweg",
            "term": "Spoorweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Spoorweg",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en bouwwerken t.b.v.het vervoer van personen en goederen per spoor en de daarbij behorende voorzieningen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "sport",
            "term": "Sport",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Sport",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor sport.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg019",
              "content": "vsg019"
            }
          },
          {
            "label": "stedelijk gebied",
            "term": "StedelijkGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in stedelijk gebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg027",
              "content": "vsg027"
            }
          },
          {
            "label": "stedelijk gebied-buiten centrum",
            "term": "StedelijkGebiedBuitenCentrum",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkGebiedBuitenCentrum",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in stedelijk gebied dat buiten het stads- of dorpscentrum ligt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "stedelijk gebied-centrum dorps",
            "term": "StedelijkGebiedCentrumDorps",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkGebiedCentrumDorps",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in een dorpscentrum.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg005",
              "content": "vsg005"
            }
          },
          {
            "label": "stedelijk gebied-centrum stedelijk",
            "term": "StedelijkGebiedCentrumStedelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkGebiedCentrumStedelijk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in stedelijk gebied dat binnen het stadscentrum ligt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg005",
              "content": "vsg005"
            }
          },
          {
            "label": "stedelijk gebied-groen stedelijk",
            "term": "StedelijkGebiedGroenStedelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkGebiedGroenStedelijk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in stedelijk gebied dat buiten het stads- of dorpscentrum ligt en een groen karakter heeft.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg004",
              "content": "vsg004"
            }
          },
          {
            "label": "stedelijk uitloopgebied",
            "term": "StedelijkUitloopgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StedelijkUitloopgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in het multifunctionele gebied in de stadsrandzone met o.a. recreatief gebruik.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "stil gebied",
            "term": "StilGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/StilGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in gebieden waar stilte een belangrijk aspect is.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg010",
              "content": "vsg010"
            }
          },
          {
            "label": "toepassingsgebied mijnsteen",
            "term": "ToepassingsgebiedMijnsteen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/ToepassingsgebiedMijnsteen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen en begrenzen van gebieden voor het toepassen van (vermengde) mijnsteen op of in de landbodem en het daarvoor stellen van regels over gebruik van gronden en gebouwen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "transformatiegebied",
            "term": "Transformatiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Transformatiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in gebieden waar transformatie naar andere functies of gebiedskarakteristiek is beoogd.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "veehouderij",
            "term": "Veehouderij",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Veehouderij",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. de veehouderij.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg003",
              "content": "vsg003"
            }
          },
          {
            "label": "verblijfsgebied",
            "term": "Verblijfsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Verblijfsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in verblijfsgebied: openbaar gebied dat geen functie voor doorgaand gemotoriseerd verkeer heeft.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg017",
              "content": "vsg017"
            }
          },
          {
            "label": "verblijfsrecreatie",
            "term": "Verblijfsrecreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Verblijfsrecreatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor verblijfsrecreatieve doeleinden buiten het hoofdverblijf plaatsvindt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg018",
              "content": "vsg018"
            }
          },
          {
            "label": "verkeer",
            "term": "Verkeer",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Verkeer",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in openbaar gebied met een functie voor (doorgaand) gemotoriseerd verkeer.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "verstoringsgebied militaire zend- en ontvangstinstallatie",
            "term": "VerstoringsgebiedMilitaireZendEnOntvangstinstallatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/VerstoringsgebiedMilitaireZendEnOntvangstinstallatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebied waar bouwwerken een militaire zend- en ontvangstinstallatie kunnen verstoren.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg014",
              "content": "vsg014"
            }
          },
          {
            "label": "voorschriftengebied",
            "term": "Voorschriftengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Voorschriftengebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het aanwijzen van een gebied als aandachtsgebied externe veiligheid als bedoeld in artikel 5.14 Besluit kwaliteit leefomgeving en het daarover stellen van regels.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor brandvoorschriftengebied en explosievoorschriftengebied.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "waarde",
            "term": "Waarde",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Waarde",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden met bijzondere waarden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "water",
            "term": "Water",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Water",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over water en watersystemen in de openbare ruimte.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor vijvers, beken, rivieren.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "waterberging",
            "term": "Waterberging",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Waterberging",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebied dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "waterkering",
            "term": "Waterkering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Waterkering",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over een gebied of object met waterkerende en/of waterscheidende werking.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterstaatswerk",
            "term": "Waterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Waterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over oppervlaktewaterlichaam, bergingsgebied, waterkering of ondersteunend kunstwerk.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterwingebied",
            "term": "Waterwingebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Waterwingebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden met het oog op de bescherming van het gebied waar drinkwater wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "werelderfgoed",
            "term": "Werelderfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Werelderfgoed",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels ter bescherming van een monument dat van belang is voor de wereldgemeenschap.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg006",
              "content": "vsg006"
            }
          },
          {
            "label": "windturbine",
            "term": "Windturbine",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Windturbine",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen voor windturbines.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor een afzonderlijke windturbine maar ook voor een gebied met windturbines.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "wonen",
            "term": "Wonen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Wonen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen t.b.v. het wonen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg026",
              "content": "vsg026"
            }
          },
          {
            "label": "woongebied",
            "term": "Woongebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Woongebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen in gebieden waar het wonen domineert.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg027",
              "content": "vsg027"
            }
          },
          {
            "label": "zandwinning",
            "term": "Zandwinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Zandwinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden waar zand wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "zonne-energiegebied",
            "term": "ZonneEnergiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/ZonneEnergiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. energiewinning d.m.v. grootschalige installaties voor de winning van zonne-energie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "zoutwinning",
            "term": "Zoutwinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/Zoutwinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik en bescherming van gebieden waar zout wordt gewonnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "zuiveringtechnisch werk",
            "term": "ZuiveringtechnischWerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/functie/id/concept/ZuiveringtechnischWerk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Functie t.b.v. het begrenzen van en stellen van regels over gebruik van gronden en gebouwen i.v.m. een werk voor het zuiveren van stedelijk afvalwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "functie",
          "term": "Functie",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Functie",
          "omschrijving": "Begrippen gerelateerd aan de toedeling van functies aan locaties.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "geluidgroep",
      "titel": "Geluidgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Geluidgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Geluid, dat zorgt voor filteren en weergave van de symbolisatie van Geluid op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aandachtsgebied geluid",
            "term": "AandachtsgebiedGeluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geluid/id/concept/AandachtsgebiedGeluid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Geluid voor het aanwijzen van een gebied als gebied waar het geluid door een geluidbronsoort op de gevel van geluidgevoelig gebouwen hoger kan zijn dan de standaardwaarde.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geluid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "agglomeratie richtlijn omgevingslawaai",
            "term": "AgglomeratieRichtlijnOmgevingslawaai",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geluid/id/concept/AgglomeratieRichtlijnOmgevingslawaai",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Geluid voor een bij Omgevingsregeling aangewezen gebied waar voor gemeenten verplichtingen gelden op grond van de richtlijn omgevingslawaai.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geluid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geluid/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Geluid voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geluid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "stiltegebied",
            "term": "Stiltegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geluid/id/concept/Stiltegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Geluid voor een bij omgevingsverordening aangewezen gebied waar regels gelden over het voorkomen of beperken van geluid.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geluid",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag509",
              "content": "vag509"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "geluid",
          "term": "Geluid",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geluid",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van geluid.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "geurgroep",
      "titel": "Geurgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Geurgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Geur, dat zorgt voor filteren en weergave van de symbolisatie van Geur op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bebouwingscontour",
            "term": "Bebouwingscontour",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geur/id/concept/Bebouwingscontour",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Geur voor bij omgevingsplan aangewezen gebied waarbinnen afwijkende grenswaarden voor de geur door zuiveringtechnische werken en agrarische activiteiten gelden.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "concentratiegebied",
            "term": "Concentratiegebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geur/id/concept/Concentratiegebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Geur voor bij omgevingsplan aangewezen gebied als bedoeld in bijlage I bij de Meststoffenwet waar andere standaard- en grenswaarden gelden voor de geurhinder afkomstig van veehouderijen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/geur/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Geur voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "geur",
          "term": "Geur",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Geur",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van geur.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "idealisatie",
      "titel": "Idealisatie",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Idealisatie",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut idealisatie, dat vastlegt op welke manier de begrenzing van Locatie geïnterpreteerd moet worden en door het bevoegd gezag bedoeld is.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "exact",
            "term": "Exact",
            "uri": "http://standaarden.omgevingswet.overheid.nl/idealisatie/id/concept/Exact",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Idealisatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "indicatief",
            "term": "Indicatief",
            "uri": "http://standaarden.omgevingswet.overheid.nl/idealisatie/id/concept/Indicatief",
            "definitie": "",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Idealisatie",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "idealisatie",
          "term": "Idealisatie",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Idealisatie",
          "omschrijving": "Begrippen die vastleggen op welke manier de begrenzing van Locatie geïnterpreteerd moet worden en door het bevoegd gezag bedoeld is.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "instrument",
      "titel": "Instrument",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Instrument",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut instructieregelInstrument, te gebruiken indien type Juridische regel = Instructieregel en de instructieregel is gericht op een instrument; instrumenten waarover instructieregels gesteld kunnen worden zijn opgesomd in de artikelen 2.23 en 2.25 Ow.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "besluit geldelijke regelingen",
            "term": "BesluitGeldelijkeRegelingen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitGeldelijkeRegelingen",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit over geluidwerende maatregelen",
            "term": "BesluitOverGeluidwerendeMaatregelen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitOverGeluidwerendeMaatregelen",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot aanwijzing van nationaal park",
            "term": "BesluitTotAanwijzingVanNationaalPark",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotAanwijzingVanNationaalPark",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot aanwijzing van natuurgebied",
            "term": "BesluitTotAanwijzingVanNatuurgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotAanwijzingVanNatuurgebied",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot aanwijzing van zwemlocatie",
            "term": "BesluitTotAanwijzingVanZwemlocatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotAanwijzingVanZwemlocatie",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot beperken of verbieden van toegang tot natura 2000-gebied",
            "term": "BesluitTotBeperkenOfVerbiedenVanToegangTotNatura2000Gebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotBeperkenOfVerbiedenVanToegangTotNatura2000Gebied",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot buiten toepassing laten van regels",
            "term": "BesluitTotBuitenToepassingLatenVanRegels",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotBuitenToepassingLatenVanRegels",
            "definitie": "",
            "toelichting": "Het moet gaan om een besluit als bedoeld in artikel 5.53 lid 3 of 4 Ow.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot erkenning van examen",
            "term": "BesluitTotErkenningVanExamen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotErkenningVanExamen",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot instellen van zwemverbod of geven negatief zwemadvies",
            "term": "BesluitTotInstellenVanZwemverbodOfGevenNegatiefZwemadvies",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotInstellenVanZwemverbodOfGevenNegatiefZwemadvies",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot treffen van tijdelijke bodembeschermingsmaatregelen",
            "term": "BesluitTotTreffenVanTijdelijkeBodembeschermingsmaatregelen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotTreffenVanTijdelijkeBodembeschermingsmaatregelen",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot vaststelling van begin en einde badseizoen",
            "term": "BesluitTotVaststellingVanBeginEnEindeBadseizoen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotVaststellingVanBeginEnEindeBadseizoen",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "besluit tot vaststelling van geluidproductieplafonds als omgevingswaarden",
            "term": "BesluitTotVaststellingVanGeluidproductieplafondsAlsOmgevingswaarden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/BesluitTotVaststellingVanGeluidproductieplafondsAlsOmgevingswaarden",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "calamiteitenplan",
            "term": "Calamiteitenplan",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Calamiteitenplan",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "legger",
            "term": "Legger",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Legger",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maatwerkvoorschrift",
            "term": "Maatwerkvoorschrift",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Maatwerkvoorschrift",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "monitoringsprogramma",
            "term": "Monitoringsprogramma",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Monitoringsprogramma",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "omgevingsplan",
            "term": "Omgevingsplan",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Omgevingsplan",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "omgevingsverordening",
            "term": "Omgevingsverordening",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Omgevingsverordening",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "peilbesluit",
            "term": "Peilbesluit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Peilbesluit",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "plan waarvoor passende beoordeling gemaakt moet worden",
            "term": "PlanWaarvoorPassendeBeoordelingGemaaktMoetWorden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/PlanWaarvoorPassendeBeoordelingGemaaktMoetWorden",
            "definitie": "",
            "toelichting": "Het moet gaan om een plan als bedoeld in artikel 16.53c Ow.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "programma",
            "term": "Programma",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Programma",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "projectbesluit",
            "term": "Projectbesluit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Projectbesluit",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "ruilbesluit",
            "term": "Ruilbesluit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Ruilbesluit",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "waterschapsverordening",
            "term": "Waterschapsverordening",
            "uri": "http://standaarden.omgevingswet.overheid.nl/instrument/id/concept/Waterschapsverordening",
            "definitie": "",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "instrument",
          "term": "Instrument",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Instrument",
          "omschrijving": "Begrippen die wettelijke instrumenten inhouden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "landschapgroep",
      "titel": "Landschapgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Landschapgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Landschap, dat zorgt voor filteren en weergave van de symbolisatie van Landschap op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bijzonder provinciaal landschap",
            "term": "BijzonderProvinciaalLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/landschap/id/concept/BijzonderProvinciaalLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Landschap voor het aanwijzen van een gebied als bijzonder provinciaal landschap als bedoeld in artikel 2.44 Ow.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/landschap/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Landschap voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "nationaal landschap",
            "term": "NationaalLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/landschap/id/concept/NationaalLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Landschap voor het aanwijzen van een gebied als gebied met internationaal zeldzame of unieke en nationaal kenmerkende landschapskwaliteiten en daarmee samenhangende bijzondere natuurlijke en recreatieve kwaliteiten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "open landschap",
            "term": "OpenLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/landschap/id/concept/OpenLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Landschap voor het aanwijzen van een gebied als gebied waar grootschalige openheid als kernkwaliteit geldt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag216",
              "content": "vag216"
            }
          },
          {
            "label": "specifiek benoemd landschap",
            "term": "SpecifiekBenoemdLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/landschap/id/concept/SpecifiekBenoemdLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Landschap voor het aanwijzen van een gebied als beschermenswaardig landschap.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag416",
              "content": "vag416"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "landschap",
          "term": "Landschap",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Landschap",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van landschap.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "leidinggroep",
      "titel": "Leidinggroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Leidinggroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Leiding, dat zorgt voor filteren en weergave van de symbolisatie van Leiding op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "buisleiding",
            "term": "Buisleiding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/leiding/id/concept/Buisleiding",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Leiding voor het aanwijzen van een gebied als gebied waar regels of beleid gelden voor het waarborgen van de goede staat en instandhouding van een aanwezige of geprojecteerde buisleiding.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Leiding",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/leiding/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Leiding voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Leiding",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "reserveringsgebied",
            "term": "Reserveringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/leiding/id/concept/Reserveringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Leiding voor het aanwijzen van een gebied als reserveringsgebied voor de aanleg van werken waar regels gelden over activiteiten die de aanleg zouden bemoeilijken.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Leiding",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "tracé hoogspanning",
            "term": "TraceHoogspanning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/leiding/id/concept/TraceHoogspanning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Leiding voor het aanwijzen van een gebied waar ingevolge een aanwezige of geprojecteerde ondergrondse of bovengrondse hoogspanningsverbinding regels gelden ter bescherming van de hoogspanningsverbinding en (personen in) de omgeving daarvan.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Leiding",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "leiding",
          "term": "Leiding",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Leiding",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van leiding.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "luchtgroep",
      "titel": "Luchtgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Luchtgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Lucht, dat zorgt voor filteren en weergave van de symbolisatie van Lucht op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aandachtsgebied luchtkwaliteit",
            "term": "AandachtsgebiedLuchtkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/lucht/id/concept/AandachtsgebiedLuchtkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Lucht voor het bij Omgevingsregeling op grond van artikel 5.51 Besluit kwaliteit leefomgeving aanwijzen van gebieden waar op grond van de reeds aanwezige concentraties stikstofoxiden en fijnstof ook voor nieuwe niet-vergunningplichtige activiteiten de omgevingswaarden voor deze stoffen in acht moeten worden genomen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Lucht",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          },
          {
            "label": "locatie uitgezonderd van nibm",
            "term": "LocatieUitgezonderdVanNibm",
            "uri": "http://standaarden.omgevingswet.overheid.nl/lucht/id/concept/LocatieUitgezonderdVanNibm",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Lucht voor het aanwijzen van een gebied binnen een aandachtsgebied luchtkwaliteit waar de niet-in-betekenende-mate-bepalingen uit het Besluit kwaliteit leefomgeving niet van toepassing zijn.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Lucht",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/lucht/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Lucht voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Lucht",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "varend ontgassen",
            "term": "VarendOntgassen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/lucht/id/concept/VarendOntgassen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Lucht voor het aanwijzen van een gebied waar regels gelden voor het varend ontgassen van binnentankschepen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Lucht",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "lucht",
          "term": "Lucht",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Lucht",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van lucht.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "mijnbouwgroep",
      "titel": "Mijnbouwgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Mijnbouwgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw, dat zorgt voor filteren en weergave van de symbolisatie van Mijnbouw op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "algemeen",
            "term": "Algemeen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Algemeen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied in verband met algemene aspecten van mijnbouw.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "gaswinning",
            "term": "Gaswinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Gaswinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waar regels of beleid gelden voor de winining van gas.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "mergelwinning",
            "term": "Mergelwinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Mergelwinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waar regels of beleid gelden voor de winining van mergel.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg013",
              "content": "vsg013"
            }
          },
          {
            "label": "oliewinning",
            "term": "Oliewinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Oliewinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waar regels of beleid gelden voor de winining van olie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "schaliegaswinning",
            "term": "Schaliegaswinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Schaliegaswinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waar regels of beleid gelden voor de winining van schaliegas.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "zoutwinning",
            "term": "Zoutwinning",
            "uri": "http://standaarden.omgevingswet.overheid.nl/mijnbouw/id/concept/Zoutwinning",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Mijnbouw voor het aanwijzen van een gebied waar regels of beleid gelden voor de winining van zout.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "mijnbouw",
          "term": "Mijnbouw",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Mijnbouw",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van mijnbouw.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "natuurgroep",
      "titel": "Natuurgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Natuurgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Natuur, dat zorgt voor filteren en weergave van de symbolisatie van Natuur op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bebouwingscontour houtkap",
            "term": "BebouwingscontourHoutkap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/BebouwingscontourHoutkap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het bij omgevingsplan aangewezen gebied waar de regels van afdeling 11.3 Besluit activiteiten leefomgeving over houtopstanden niet van toepassing zijn.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "bebouwingscontour jacht",
            "term": "BebouwingscontourJacht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/BebouwingscontourJacht",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het gebied dat ingevolge artikel 5.165a Besluit kwaliteit leefomgeving bij omgevingsplan is aangewezen in verband met de toepassing van regels over de jacht van het Besluit activiteiten leefomgeving.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "bijzonder nationaal natuurgebied",
            "term": "BijzonderNationaalNatuurgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/BijzonderNationaalNatuurgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als bijzonder nationaal natuurgebied.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "bijzonder provinciaal natuurgebied",
            "term": "BijzonderProvinciaalNatuurgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/BijzonderProvinciaalNatuurgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het bij omgevingsverordening aanwijzen van een gebied als bijzonder provinciaal natuurgebied.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "habitatrichtlijngebied",
            "term": "Habitatrichtlijngebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Habitatrichtlijngebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als Natura 2000-gebied ter uitvoering van de habitatrichtlijn.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt114",
              "content": "vsgt114"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "nationaal park",
            "term": "NationaalPark",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/NationaalPark",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als gebied met belangrijke natuurwetenschappelijke of landschappelijke kwaliteiten.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "natura 2000-gebied",
            "term": "Natura2000Gebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Natura2000Gebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als Natura 2000-gebied.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "natuurbeheergebied",
            "term": "Natuurbeheergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Natuurbeheergebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als natuurbeheergebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "natuurnetwerk nederland",
            "term": "NatuurnetwerkNederland",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/NatuurnetwerkNederland",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het bij omgevingsverordening aanwijzen van een gebied als behorende tot het natuurnetwerk Nederland.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt115",
              "content": "vsgt115"
            }
          },
          {
            "label": "toegangsbeperkingsgebied",
            "term": "Toegangsbeperkingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Toegangsbeperkingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het bij toegangsbeperkingsbesluit aanwijzen van een gebied waar regels gelden over de beperking of het verbod van de toegang tot een Natura 2000-gebied.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt002",
              "content": "vsgt002"
            }
          },
          {
            "label": "vogelrichtlijngebied",
            "term": "Vogelrichtlijngebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/natuur/id/concept/Vogelrichtlijngebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Natuur voor het aanwijzen van een gebied als Natura 2000-gebied ter uitvoering van de vogelrichtlijn.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt123",
              "content": "vsgt123"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "natuur",
          "term": "Natuur",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Natuur",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van natuur.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "omgevingsnormgroep",
      "titel": "Omgevingsnormgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Omgevingsnormgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij Omgevingsnorm, dat zorgt voor filteren en weergave van de symbolisatie van Omgevingsnorm op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bedrijvigheid",
            "term": "Bedrijvigheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Bedrijvigheid",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor bedrijvigheid.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor aantal bezoekers, maximum aantal bedrijven.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog013",
              "content": "vog013"
            }
          },
          {
            "label": "bodem",
            "term": "Bodem",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Bodem",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor bodem.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog007",
              "content": "vog007"
            }
          },
          {
            "label": "bouwaanduiding",
            "term": "Bouwaanduiding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Bouwaanduiding",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm over de wijze van bouwen.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor vrijstaand en aaneengebouwd voor woningtypen, karakteristiek voor gebouwen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog004",
              "content": "vog004"
            }
          },
          {
            "label": "externe veiligheid",
            "term": "ExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/ExterneVeiligheid",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor externe veiligheid.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog011",
              "content": "vog011"
            }
          },
          {
            "label": "geluid",
            "term": "Geluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Geluid",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor geluid.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog003",
              "content": "vog003"
            }
          },
          {
            "label": "geur",
            "term": "Geur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Geur",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor geur.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog002",
              "content": "vog002"
            }
          },
          {
            "label": "groen",
            "term": "Groen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Groen",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor groen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog010",
              "content": "vog010"
            }
          },
          {
            "label": "licht",
            "term": "Licht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Licht",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor licht en duisternis.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog026",
              "content": "vog026"
            }
          },
          {
            "label": "luchtkwaliteit",
            "term": "Luchtkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Luchtkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor luchtkwaliteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog019",
              "content": "vog019"
            }
          },
          {
            "label": "maatvoering bouwen",
            "term": "MaatvoeringBouwen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/MaatvoeringBouwen",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor de maatvoering van bouwwerken.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor maximum bouwhoogte, maximum oppervlakte.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog000",
              "content": "vog000"
            }
          },
          {
            "label": "maatvoering gebruik",
            "term": "MaatvoeringGebruik",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/MaatvoeringGebruik",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor de maatvoering van (planologisch) gebruik.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog014",
              "content": "vog014"
            }
          },
          {
            "label": "maatvoering infrastructuur",
            "term": "MaatvoeringInfrastructuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/MaatvoeringInfrastructuur",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor infrastructuur.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor maximum aantal rijstroken, aantal sporen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog001",
              "content": "vog001"
            }
          },
          {
            "label": "natuur",
            "term": "Natuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Natuur",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor natuur.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog016",
              "content": "vog016"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor aspecten die niet vallen onder een van de overige waarden.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog021",
              "content": "vog021"
            }
          },
          {
            "label": "parkeren",
            "term": "Parkeren",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Parkeren",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor parkeren.",
            "toelichting": "Groep bijvoorbeeld te gebruiken voor aantal parkeerplaatsen, minimum oppervlakte parkeerplaats.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog030",
              "content": "vog030"
            }
          },
          {
            "label": "trilling",
            "term": "Trilling",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Trilling",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor trilling.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog028",
              "content": "vog028"
            }
          },
          {
            "label": "veiligheid waterkering",
            "term": "VeiligheidWaterkering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/VeiligheidWaterkering",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor waterkering.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog024",
              "content": "vog024"
            }
          },
          {
            "label": "water",
            "term": "Water",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Water",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor water.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog022",
              "content": "vog022"
            }
          },
          {
            "label": "waterkwaliteit",
            "term": "Waterkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Waterkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor waterkwaliteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog020",
              "content": "vog020"
            }
          },
          {
            "label": "wateroverlast",
            "term": "Wateroverlast",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Wateroverlast",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor wateroverlast.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog029",
              "content": "vog029"
            }
          },
          {
            "label": "zwemwaterkwaliteit",
            "term": "Zwemwaterkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingsnorm/id/concept/Zwemwaterkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingsnorm voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingsnorm voor zwemwaterkwaliteit.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
            "specialisatie": "",
            "symboolcode": {
              "id": "vog023",
              "content": "vog023"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "omgevingsnorm",
          "term": "Omgevingsnorm",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingsnorm",
          "omschrijving": "Begrippen die een kwalitatieve of kwantitatieve normering voor aspecten van de fysieke leefomgeving aanduiden, die geen omgevingswaarde is.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "omgevingswaardegroep",
      "titel": "Omgevingswaardegroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Omgevingswaardegroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij Omgevingswaarde, dat zorgt voor filteren en weergave van de symbolisatie van Omgevingswaarde op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "energie",
            "term": "Energie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Energie",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect energie.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt028",
              "content": "vsgt028"
            }
          },
          {
            "label": "geluid",
            "term": "Geluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Geluid",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect geluid.",
            "toelichting": "Groep o.a. te gebruiken voor geluidproductieplafonds als omgevingswaarden.",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt003",
              "content": "vsgt003"
            }
          },
          {
            "label": "luchtkwaliteit",
            "term": "Luchtkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Luchtkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect kwaliteit van de buitenlucht.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt019",
              "content": "vsgt019"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor die aspecten die niet vallen onder een van de overige waarden.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt021",
              "content": "vsgt021"
            }
          },
          {
            "label": "veiligheid waterkering",
            "term": "VeiligheidWaterkering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/VeiligheidWaterkering",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect veiligheid van waterkeringen.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt022",
              "content": "vsgt022"
            }
          },
          {
            "label": "waterkwaliteit",
            "term": "Waterkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Waterkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect kwaliteit van het water.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt024",
              "content": "vsgt024"
            }
          },
          {
            "label": "wateroverlast",
            "term": "Wateroverlast",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Wateroverlast",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaardevoor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect wateroverlast.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt029",
              "content": "vsgt029"
            }
          },
          {
            "label": "zwemwaterkwaliteit",
            "term": "Zwemwaterkwaliteit",
            "uri": "http://standaarden.omgevingswet.overheid.nl/omgevingswaarde/id/concept/Zwemwaterkwaliteit",
            "definitie": "Waarde voor attribuut groep bij het object Omgevingswaarde voor het vaststellen, geometrisch begrenzen en per locatie waarden vastleggen van een omgevingswaarde voor het aspect kwaliteit van zwemwater en zwemlocaties.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2016-156.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt023",
              "content": "vsgt023"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "omgevingswaarde",
          "term": "Omgevingswaarde",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Omgevingswaarde",
          "omschrijving": "Begrippen die een kwalitatieve of kwantitatieve normering van omgevingswaarden aanduiden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "recreatiegroep",
      "titel": "Recreatiegroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Recreatiegroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Recreatie, dat zorgt voor filteren en weergave van de symbolisatie van Recreatie op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "dagrecreatie",
            "term": "Dagrecreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/recreatie/id/concept/Dagrecreatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Recreatie voor het aanwijzen van een gebied voor dagrecreatieve activiteiten zonder overnachting.",
            "toelichting": "Gebied waar dagrecreatieve activiteiten plaatsvinden, zonder overnachting, zoals recreatieplas, attractiepark, museum, rondrit, etc.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Recreatie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg118",
              "content": "vsg118"
            }
          },
          {
            "label": "kleinschalige voorzieningen",
            "term": "KleinschaligeVoorzieningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/recreatie/id/concept/KleinschaligeVoorzieningen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Recreatie voor het aanwijzen van een gebied voor kleinschalige dag- en/of verblijfsrecreatie.",
            "toelichting": "Gebied waarin kleinschalige dag-en/of verblijfsrecreatie plaatsvindt, zoals voorzieningen voor wandelen, fietsen, vissen, kanoeen, kleine campings, B&B, kleine pensions, etc .",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Recreatie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag518",
              "content": "vag518"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/recreatie/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Recreatie voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Recreatie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "verblijfsrecreatie",
            "term": "Verblijfsrecreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/recreatie/id/concept/Verblijfsrecreatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Recreatie voor het aanwijzen van een gebied waar het verblijf voor recreatieve doeleinden buiten het hoofdverblijf plaatsvindt.",
            "toelichting": "Gebied waar het verblijf voor recreatieve doeleinden buiten de eerste woning plaatsvindt, waarbij ten minste één nacht wordt doorgebracht, met uitzondering van overnachtingen bij familie en kennissen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Recreatie",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg018",
              "content": "vsg018"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "recreatie",
          "term": "Recreatie",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Recreatie",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van recreatie.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "ruimtelijk gebruikgroep",
      "titel": "RuimtelijkGebruikgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/RuimtelijkGebruikgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik, dat zorgt voor filteren en weergave van de symbolisatie van Ruimtelijkgebruik op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "afvalstoffen",
            "term": "Afvalstoffen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Afvalstoffen",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor afvalstoffen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "bebouwingscontour",
            "term": "Bebouwingscontour",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Bebouwingscontour",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar restrictief beleid geldt voor bebouwing.",
            "toelichting": "Een gebied waarbinnen een restrictief beleid geldt voor bebouwing.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "bedrijventerrein",
            "term": "Bedrijventerrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Bedrijventerrein",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor bedrijventerreinen.",
            "toelichting": "Aaneengesloten terrein voor de bedrijfsmatige uitoefening van industriële, logistieke, ambachtelijke en dienstverlenende activiteiten engroothandel met de daarbij horende voorzieningen, bedoeld voor de vestiging van meerdere bedrijven.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "detailhandel",
            "term": "Detailhandel",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Detailhandel",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor detailhandel.",
            "toelichting": "Detailhandel is het leveren van fysieke goederen voor persoonlijk gebruik aan de consument. Het is een sector die bestaat uit verschillende branches (zoals de levensmiddelenbranche, de modebranche, de wonenbranche enz.).",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg007",
              "content": "vsg007"
            }
          },
          {
            "label": "glastuinbouw",
            "term": "Glastuinbouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Glastuinbouw",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt gericht op de teelt of veredeling van gewassen, geheel of nagenoeg geheel met behulp van een glasopstand.",
            "toelichting": "Bedrijf gericht op de teelt of veredeling van gewassen geheel of nagenoeg geheel met behulp van een glasopstand van minimaal 2.500 m2.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg101",
              "content": "vsg101"
            }
          },
          {
            "label": "industrieterrein",
            "term": "Industrieterrein",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Industrieterrein",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor industrieterreinen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "infrastructuur",
            "term": "Infrastructuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Infrastructuur",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor infrastructuur.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "kantoorlocatie",
            "term": "Kantoorlocatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Kantoorlocatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor kantoren.",
            "toelichting": "Kantoor als een ruimtelijk zelfstandige eenheid.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg012",
              "content": "vsg012"
            }
          },
          {
            "label": "landbouw",
            "term": "Landbouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Landbouw",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor landbouw.",
            "toelichting": "Agrarische cultuurgrond, met inbegrip van de agrarische bouwpercelen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "landelijk gebied",
            "term": "LandelijkGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied als behorend tot het landelijk gebied waar landbouw en natuur een belangrijke rol spelen.",
            "toelichting": "Gebied buiten de steden, waar landbouw en natuur een belangrijke rol spelen. Ook wel platteland genoemd.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "landelijk gebied-agrarisch",
            "term": "LandelijkGebiedAgrarisch",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebiedAgrarisch",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied als behorend tot het landelijk gebied met overwegend agrarische functies.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "landelijk gebied-hoofdfunctie landschap",
            "term": "LandelijkGebiedHoofdfunctieLandschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebiedHoofdfunctieLandschap",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied als behorend tot het landelijk gebied waar het landschap de belangrijkste rol speelt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg015",
              "content": "vsg015"
            }
          },
          {
            "label": "landelijk gebied-hoofdfunctie natuur",
            "term": "LandelijkGebiedHoofdfunctieNatuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebiedHoofdfunctieNatuur",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied als behorend tot het landelijk gebied waar natuur de belangrijkste rol speelt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg016",
              "content": "vsg016"
            }
          },
          {
            "label": "landelijk gebied-stedelijk uitloopgebied",
            "term": "LandelijkGebiedStedelijkUitloopgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebiedStedelijkUitloopgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied als multifunctioneel gebied in de stadsrandzone met o.a. recreatief gebruik.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "landelijk gebied-verweving van functies",
            "term": "LandelijkGebiedVerwevingVanFuncties",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/LandelijkGebiedVerwevingVanFuncties",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar de menging van agrarische, natuur- en andere functies wordt nagestreefd.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg027",
              "content": "vsg027"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype RuimtelijkGebruik voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "ontwikkeling landelijke functies",
            "term": "OntwikkelingLandelijkeFuncties",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/OntwikkelingLandelijkeFuncties",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied voor de ontwikkeling van nieuwe landelijke functies.",
            "toelichting": "Gebied waar na afweging de ontwikkeling van landelijke functies mogelijk is.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "ontwikkeling stedelijke functies",
            "term": "OntwikkelingStedelijkeFuncties",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/OntwikkelingStedelijkeFuncties",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied voor de ontwikkeling van nieuwe stedelijke functies.",
            "toelichting": "Gebied buiten het (bestaand)stedelijk gebied waar na afweging nieuwe stedelijke functies mogelijk zijn, zoals woonwijken, bedrijventerreinen en andere stedelijke voorzieningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vaz225",
              "content": "vaz225"
            }
          },
          {
            "label": "overig",
            "term": "Overig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Overig",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied wanneer men het Gebiedsaanwijzingtype Ruimtelijkgebruik wil gebruiken maar geen van de andere groepen van toepassing is.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "specifiek teeltgebied",
            "term": "SpecifiekTeeltgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/SpecifiekTeeltgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor een specifiek type vollegrondsteelt.",
            "toelichting": "Gebied met een specifieke vollegrondsteelt, zoals bijvoorbeeld bollenteelt.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg001",
              "content": "vsg001"
            }
          },
          {
            "label": "stedelijk gebied",
            "term": "StedelijkGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/StedelijkGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van de bebouwde gebieden van dorpen en steden.",
            "toelichting": "De bebouwde gebieden van zowel dorpen als steden, als ook grote verharde oppervlakten, bijvoorbeeld: woonwijken, industrieterreinen, rijkswegen, complex van kassen van de glastuinbouw, etc.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt025",
              "content": "vsgt025"
            }
          },
          {
            "label": "stedelijk gebied-buiten centrum",
            "term": "StedelijkGebiedBuitenCentrum",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/StedelijkGebiedBuitenCentrum",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied dat behoort tot het stedelijk gebied maar buiten het centrum ligt.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg009",
              "content": "vsg009"
            }
          },
          {
            "label": "stedelijk gebied-centrum dorps",
            "term": "StedelijkGebiedCentrumDorps",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/StedelijkGebiedCentrumDorps",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied dat tot het centrum van een dorp behoort.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg005",
              "content": "vsg005"
            }
          },
          {
            "label": "stedelijk gebied-centrum stedelijk",
            "term": "StedelijkGebiedCentrumStedelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/StedelijkGebiedCentrumStedelijk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied dat tot het centrum van een stad behoort.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg005",
              "content": "vsg005"
            }
          },
          {
            "label": "stedelijk gebied-groen stedelijk",
            "term": "StedelijkGebiedGroenStedelijk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/StedelijkGebiedGroenStedelijk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied dat behoort tot het stedelijk gebied met overwegend woningen en veel groen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg004",
              "content": "vsg004"
            }
          },
          {
            "label": "veehouderij",
            "term": "Veehouderij",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Veehouderij",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid voor de veehouderij geldt.",
            "toelichting": "Gebied waar men veehouderij bedrijft, de tak van landbouw waarbij men vee houdt voor het verkrijgen van melk, eieren, vlees of bont.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt003",
              "content": "vsgt003"
            }
          },
          {
            "label": "water",
            "term": "Water",
            "uri": "http://standaarden.omgevingswet.overheid.nl/ruimtelijkgebruik/id/concept/Water",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Ruimtelijkgebruik voor het aanwijzen van een gebied waar specifiek beleid geldt voor water.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "ruimtelijk gebruik",
          "term": "RuimtelijkGebruik",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/RuimtelijkGebruik",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van ruimtelijk gebruik.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "thema",
      "titel": "Thema",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Thema",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut thema bij Juridische regel en Tekstdeel.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bodem",
            "term": "Bodem",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Bodem",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op bodem als aspect van de fysieke leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bouwwerken",
            "term": "Bouwwerken",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Bouwwerken",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gaan over bouwwerken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "cultureel erfgoed",
            "term": "CultureelErfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/CultureelErfgoed",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op bescherming van cultureel erfgoed.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "energie en natuurlijke hulpbronnen",
            "term": "EnergieEnNatuurlijkeHulpbronnen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/EnergieEnNatuurlijkeHulpbronnen",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op de benutting en bescherming van de energievoorziening en de natuurlijke hulpbronnen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "externe veiligheid",
            "term": "ExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/ExterneVeiligheid",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op het waarborgen van  de externe veiligheid.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "geluid",
            "term": "Geluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Geluid",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op het tegengaan van geluidhinder.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "gezondheid",
            "term": "Gezondheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Gezondheid",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op het waarborgen van de gezondheidsaspecten van de leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "infrastructuur",
            "term": "Infrastructuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Infrastructuur",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op de infrastructuur als aspect van de fysieke leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "landgebruik",
            "term": "Landgebruik",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Landgebruik",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op het aspect landgebruik.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "landschap",
            "term": "Landschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Landschap",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op de bescherming en ontwikkeling van het landschap.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "lucht",
            "term": "Lucht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Lucht",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op lucht als aspect van de fysieke leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "milieu algemeen",
            "term": "MilieuAlgemeen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/MilieuAlgemeen",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op risico's voor het milieu in algemene zin.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "natuur",
            "term": "Natuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Natuur",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op natuur als aspect van de fysieke leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "procedures",
            "term": "Procedures",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/Procedures",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op procedures.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "water en watersystemen",
            "term": "WaterEnWatersystemen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/thema/id/concept/WaterEnWatersystemen",
            "definitie": "Kenmerk dat aangeeft dat de regels of het beleid gericht zijn op water en watersystemen als aspect van de fysieke leefomgeving.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "thema",
          "term": "Thema",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Thema",
          "omschrijving": "De aanduiding van het aspect van de fysieke leefomgeving waar de regel of de beleidstekst over gaat.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "type gebiedsaanwijzing",
      "titel": "TypeGebiedsaanwijzing",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/TypeGebiedsaanwijzing",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut type, dat aangeeft welk type Gebiedsaanwijzing wordt geannoteerd.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "beperkingengebied",
            "term": "Beperkingengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Beperkingengebied",
            "definitie": "Object dat machineleesbaar maakt dat een Juridische regel en de bijbehorende Locatie(s) gaan over een beperkingengebied als bedoeld in de Omgevingswet: een bij of krachtens de wet aangewezen gebied waar, vanwege de aanwezigheid van een werk of object, regels gelden over activiteiten die gevolgen hebben of kunnen hebben voor dat werk of object.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bodem",
            "term": "Bodem",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Bodem",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming van de bodemkwaliteit.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bouw",
            "term": "Bouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Bouw",
            "definitie": "Object dat machineleesbaar maakt dat een Juridische regel in het omgevingsplan en de bijbehorende Locatie(s) gaan over de situering van bouwwerken.",
            "toelichting": "Alleen te gebruiken in het omgevingsplan.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": {"id": ""}
          },
          {
            "label": "defensie",
            "term": "Defensie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Defensie",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming en het tegengaan van verstoring van militaire gebieden en objecten.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "energievoorziening",
            "term": "Energievoorziening",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Energievoorziening",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming en bevordering van de energievoorziening.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "erfgoed",
            "term": "Erfgoed",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Erfgoed",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming van cultureel erfgoed.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "externe veiligheid",
            "term": "ExterneVeiligheid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/ExterneVeiligheid",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het waarborgen van de veiligheid.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "functie",
            "term": "Functie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Functie",
            "definitie": "Object dat machineleesbaar maakt dat een Juridische regel en de bijbehorende Locatie(s) gaan over een functie: het gebruiksdoel of de bijzondere eigenschap die een onderdeel van de fysieke leefomgeving op een bepaalde locatie heeft.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "geluid",
            "term": "Geluid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Geluid",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het tegengaan van geluidhinder.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "geur",
            "term": "Geur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Geur",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het tegengaan van geurhinder.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "landschap",
            "term": "Landschap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Landschap",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming en de ontwikkeling van het landschap vanuit ander perspectief dan natuur en erfgoed.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "leiding",
            "term": "Leiding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Leiding",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het waarborgen van de goede staat en instandhouding van leidingen.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "lucht",
            "term": "Lucht",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Lucht",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming van de kwaliteit van de buitenlucht.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "mijnbouw",
            "term": "Mijnbouw",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Mijnbouw",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het kunnen verrichten van mijnbouwactiviteiten.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "natuur",
            "term": "Natuur",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Natuur",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de bescherming van natuur en landschap.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "recreatie",
            "term": "Recreatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Recreatie",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op de beheersing en ontwikkeling van recreatie.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "ruimtelijk gebruik",
            "term": "RuimtelijkGebruik",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/RuimtelijkGebruik",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op die vormen van ruimtelijk gebruik die niet onder een van de andere Gebiedsaanwijzingtypen te vatten zijn.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "verkeer",
            "term": "Verkeer",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/Verkeer",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op beheer, onderhoud en ontwikkeling van verkeer en mobiliteit.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "water en watersysteem",
            "term": "WaterEnWatersysteem",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typegebiedsaanwijzing/id/concept/WaterEnWatersysteem",
            "definitie": "Object dat machineleesbaar maakt dat een gebied is aangewezen door regels of beleid, gericht op het beheer van water en watersystemen.",
            "toelichting": "",
            "bron": "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "type gebiedsaanwijzing",
          "term": "TypeGebiedsaanwijzing",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeGebiedsaanwijzing",
          "omschrijving": "Begrippen die een sectorale/domein-inhoudelijke typering van een gebied aanduiden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "type norm",
      "titel": "TypeNorm",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/TypeNorm",
      "type": "uitbreidbaar",
      "omschrijving": "Waardelijst voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "aaneengebouwd",
            "term": "Aaneengebouwd",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Aaneengebouwd",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "bijvoorbeeld voor aaneengebouwde woningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal aaneen te bouwen woningen",
            "term": "AantalAaneenTeBouwenWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalAaneenTeBouwenWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal aaneen te bouwen wooneenheden",
            "term": "AantalAaneenTeBouwenWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalAaneenTeBouwenWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal bedrijfswoningen",
            "term": "AantalBedrijfswoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalBedrijfswoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal bedrijven",
            "term": "AantalBedrijven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalBedrijven",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal bezoekers ",
            "term": "AantalBezoekers",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalBezoekers",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal bouwlagen",
            "term": "AantalBouwlagen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalBouwlagen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal gebouwen",
            "term": "AantalGebouwen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalGebouwen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal gebouwen met functionele binding",
            "term": "AantalGebouwenMetFunctioneleBinding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalGebouwenMetFunctioneleBinding",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal parkeerplaatsen",
            "term": "AantalParkeerplaatsen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalParkeerplaatsen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde parkeren van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal rijstroken",
            "term": "AantalRijstroken",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalRijstroken",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde parkeren van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal sporen",
            "term": "AantalSporen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalSporen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering infrastructuur van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal winkels",
            "term": "AantalWinkels",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalWinkels",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal woningen",
            "term": "AantalWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bedoeld voor zelfstandige woningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "aantal wooneenheden",
            "term": "AantalWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/AantalWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bijvoorbeeld voor de eenheden in een gesplitste woning.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "antennemast",
            "term": "Antennemast",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Antennemast",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bebouwde oppervlakte",
            "term": "BebouwdeOppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/BebouwdeOppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bebouwingspercentage",
            "term": "Bebouwingspercentage",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Bebouwingspercentage",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bijgebouwen",
            "term": "Bijgebouwen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Bijgebouwen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "bouwhoogte",
            "term": "Bouwhoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Bouwhoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "breedte",
            "term": "Breedte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Breedte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "dakhelling",
            "term": "Dakhelling",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Dakhelling",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "diepte",
            "term": "Diepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Diepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "gestapeld",
            "term": "Gestapeld",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Gestapeld",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "goothoogte",
            "term": "Goothoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Goothoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "hoogte",
            "term": "Hoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Hoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "kap",
            "term": "Kap",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Kap",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "karakteristiek",
            "term": "Karakteristiek",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Karakteristiek",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "lengte",
            "term": "Lengte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Lengte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maatvoering",
            "term": "Maatvoering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Maatvoering",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal aaneen te bouwen woningen",
            "term": "MaximumAantalAaneenTeBouwenWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalAaneenTeBouwenWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal aaneen te bouwen wooneenheden",
            "term": "MaximumAantalAaneenTeBouwenWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalAaneenTeBouwenWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal bedrijfswoningen",
            "term": "MaximumAantalBedrijfswoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalBedrijfswoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal bedrijven",
            "term": "MaximumAantalBedrijven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalBedrijven",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal bezoekers",
            "term": "MaximumAantalBezoekers",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalBezoekers",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal bouwlagen",
            "term": "MaximumAantalBouwlagen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalBouwlagen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal gebouwen",
            "term": "MaximumAantalGebouwen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalGebouwen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal gebouwen met functionele binding",
            "term": "MaximumAantalGebouwenMetFunctioneleBinding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalGebouwenMetFunctioneleBinding",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal parkeerplaatsen",
            "term": "MaximumAantalParkeerplaatsen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalParkeerplaatsen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde parkeren van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal rijstroken",
            "term": "MaximumAantalRijstroken",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalRijstroken",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering infrastructuur van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal sporen",
            "term": "MaximumAantalSporen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalSporen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering infrastructuur van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal winkels",
            "term": "MaximumAantalWinkels",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalWinkels",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal woningen",
            "term": "MaximumAantalWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bedoeld voor zelfstandige woningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum aantal wooneenheden",
            "term": "MaximumAantalWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumAantalWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bijvoorbeeld voor de eenheden in een gesplitste woning.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum bebouwde oppervlakte",
            "term": "MaximumBebouwdeOppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumBebouwdeOppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum bebouwingspercentage",
            "term": "MaximumBebouwingspercentage",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumBebouwingspercentage",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum bouwhoogte",
            "term": "MaximumBouwhoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumBouwhoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum breedte",
            "term": "MaximumBreedte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumBreedte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum dakhelling",
            "term": "MaximumDakhelling",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumDakhelling",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum diepte",
            "term": "MaximumDiepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumDiepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum goothoogte",
            "term": "MaximumGoothoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumGoothoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum hoogte",
            "term": "MaximumHoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumHoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum lengte",
            "term": "MaximumLengte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumLengte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum oppervlakte",
            "term": "MaximumOppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumOppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum verticale bouwdiepte",
            "term": "MaximumVerticaleBouwdiepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumVerticaleBouwdiepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum vloeroppervlakte",
            "term": "MaximumVloeroppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumVloeroppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum vloeroppervlakte bruto",
            "term": "MaximumVloeroppervlakteBruto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumVloeroppervlakteBruto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum vloeroppervlakte netto",
            "term": "MaximumVloeroppervlakteNetto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumVloeroppervlakteNetto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "maximum volume",
            "term": "MaximumVolume",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MaximumVolume",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal aaneen te bouwen woningen",
            "term": "MinimumAantalAaneenTeBouwenWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalAaneenTeBouwenWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal aaneen te bouwen wooneenheden",
            "term": "MinimumAantalAaneenTeBouwenWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalAaneenTeBouwenWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal bedrijfswoningen",
            "term": "MinimumAantalBedrijfswoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalBedrijfswoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal bedrijven",
            "term": "MinimumAantalBedrijven",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalBedrijven",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal bezoekers",
            "term": "MinimumAantalBezoekers",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalBezoekers",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bedrijvigheid van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal bouwlagen",
            "term": "MinimumAantalBouwlagen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalBouwlagen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal gebouwen",
            "term": "MinimumAantalGebouwen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalGebouwen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal gebouwen met functionele binding",
            "term": "MinimumAantalGebouwenMetFunctioneleBinding",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalGebouwenMetFunctioneleBinding",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal parkeerplaatsen",
            "term": "MinimumAantalParkeerplaatsen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalParkeerplaatsen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde parkeren van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal rijstroken",
            "term": "MinimumAantalRijstroken",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalRijstroken",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering infrastructuur van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal sporen",
            "term": "MinimumAantalSporen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalSporen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering infrastructuur van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal winkels",
            "term": "MinimumAantalWinkels",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalWinkels",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal woningen",
            "term": "MinimumAantalWoningen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalWoningen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bedoeld voor zelfstandige woningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum aantal wooneenheden",
            "term": "MinimumAantalWooneenheden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumAantalWooneenheden",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "bijvoorbeeld voor de eenheden in een gesplitste woning.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum bebouwde oppervlakte",
            "term": "MinimumBebouwdeOppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumBebouwdeOppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum bebouwingspercentage",
            "term": "MinimumBebouwingspercentage",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumBebouwingspercentage",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum bouwhoogte",
            "term": "MinimumBouwhoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumBouwhoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum breedte",
            "term": "MinimumBreedte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumBreedte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum dakhelling",
            "term": "MinimumDakhelling",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumDakhelling",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum diepte",
            "term": "MinimumDiepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumDiepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum goothoogte",
            "term": "MinimumGoothoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumGoothoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum hoogte",
            "term": "MinimumHoogte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumHoogte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum lengte",
            "term": "MinimumLengte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumLengte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum oppervlakte",
            "term": "MinimumOppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumOppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum verticale bouwdiepte",
            "term": "MinimumVerticaleBouwdiepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumVerticaleBouwdiepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum vloeroppervlakte",
            "term": "MinimumVloeroppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumVloeroppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum vloeroppervlakte bruto",
            "term": "MinimumVloeroppervlakteBruto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumVloeroppervlakteBruto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum vloeroppervlakte netto",
            "term": "MinimumVloeroppervlakteNetto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumVloeroppervlakteNetto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "minimum volume",
            "term": "MinimumVolume",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/MinimumVolume",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "nog toe te voegen",
            "term": "NogToeTeVoegen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/NogToeTeVoegen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde die gebruikt kan worden wanneer een bevoegd gezag een eigen waarde wil gebruiken.",
            "toelichting": "Deze waarde is toegevoegd om, zolang de DSO-systemen nog niet met uitbreidbare waardelijsten kunnen omgaan, duidelijk te kunnen maken dat het de bedoeling is een eigen waarde te gebruiken. (NB: Het bevoegd gezag kan een mail sturen aan omgevingswet@geonovum.nl met het verzoek om de betreffende waarde aan de waardelijst toe te voegen).",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "nokrichting",
            "term": "Nokrichting",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Nokrichting",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "onderdoorgang",
            "term": "Onderdoorgang",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Onderdoorgang",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "oppervlakte",
            "term": "Oppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Oppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "plat dak",
            "term": "PlatDak",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/PlatDak",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "twee-aaneen",
            "term": "TweeAaneen",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/TweeAaneen",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "bij voorbeeld voor twee-onder-een-kapwoningen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "verticale bouwdiepte",
            "term": "VerticaleBouwdiepte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/VerticaleBouwdiepte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vloeroppervlakte",
            "term": "Vloeroppervlakte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Vloeroppervlakte",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vloeroppervlakte bruto",
            "term": "VloeroppervlakteBruto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/VloeroppervlakteBruto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vloeroppervlakte netto",
            "term": "VloeroppervlakteNetto",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/VloeroppervlakteNetto",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "volume",
            "term": "Volume",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Volume",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde maatvoering bouwen van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "vrijstaand",
            "term": "Vrijstaand",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Vrijstaand",
            "definitie": "Waarde voor attribuut type bij de objecten Omgevingsnorm en Omgevingswaarde, te gebruiken in combinatie met waarde bouwaanduiding van waardelijst Omgevingsnormgroep.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          },
          {
            "label": "welstandsniveau",
            "term": "Welstandsniveau",
            "uri": "http://standaarden.omgevingswet.overheid.nl/typenorm/id/concept/Welstandsniveau",
            "definitie": "Waarde voor attribuut type bij object Omgevingsnorm.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
            "specialisatie": "",
            "symboolcode": { "id": "" }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "type norm",
          "term": "TypeNorm",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/TypeNorm",
          "omschrijving": "Begrippen die een nadere, gedetailleerdere typering van de norm (behorend bij een omgevingsnorm of omgevingswaarde) aanduiden.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "verkeergroep",
      "titel": "Verkeergroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/Verkeergroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer, dat zorgt voor filteren en weergave van de symbolisatie van Verkeer op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "luchtvaart",
            "term": "Luchtvaart",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Luchtvaart",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waar specifiek beleid geldt voor luchtvaart.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "recreatieve routenetwerken",
            "term": "RecreatieveRoutenetwerken",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/RecreatieveRoutenetwerken",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waar specifiek beleid geldt voor recreatieve routes voor fietsen en wandelen.",
            "toelichting": "Samenhangend stelsel van fiets- en wandelpaden, en vaarwegen, aangewezen vanuit een oogpunt van onderhoud en beheer.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "reserveringsgebied",
            "term": "Reserveringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Reserveringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied als reserveringsgebied voor verkeersfuncties.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "spoorweg",
            "term": "Spoorweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Spoorweg",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waar specifiek beleid geldt voor het spoorverkeer.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "vaarweg",
            "term": "Vaarweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Vaarweg",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waar specifiek beleid geldt voor water dat openstaat voor openbaar scheepvaartverkeer.",
            "toelichting": "Elk water dat openstaat voor het openbaar scheepvaartverkeer.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg023",
              "content": "vsg023"
            }
          },
          {
            "label": "weg",
            "term": "Weg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/verkeer/id/concept/Weg",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype Verkeer voor het aanwijzen van een gebied waar specifiek beleid geldt voor wegen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg121",
              "content": "vsg121"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "verkeer",
          "term": "Verkeer",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/Verkeer",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van verkeer.",
          "toelichting": ""
        }
      }
    },
    {
      "label": "water en watersysteemgroep",
      "titel": "WaterEnWatersysteemgroep",
      "uri": "http://standaarden.omgevingswet.overheid.nl/id/waardelijst/WaterEnWatersysteemgroep",
      "type": "limitatief",
      "omschrijving": "Waardelijst voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem, dat zorgt voor filteren en weergave van de symbolisatie van WaterEnWatersysteem op de kaart.",
      "toelichting": "",
      "waarden": {
        "waarde": [
          {
            "label": "bergingsgebied",
            "term": "Bergingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Bergingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waaraan op grond van de Omgevingswet een functie voor waterstaatkundige doeleinden is toegedeeld, niet zijnde een oppervlaktewaterlichaam of onderdeel daarvan, dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen.",
            "toelichting": "Gebied waaraan op grond van de Omgevingswet een functie voor waterstaatkundige doeleinden is toegedeeld, niet zijnde een oppervlaktewaterlichaam of onderdeel daarvan, dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen en dat ook als bergingsgebied op de legger is opgenomen.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg023",
              "content": "vsg023"
            }
          },
          {
            "label": "beschermde gebieden",
            "term": "BeschermdeGebieden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/BeschermdeGebieden",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied dat op grond van de Kaderrichtlijn Water is aangewezen als beschermd gebied.",
            "toelichting": "Voor de Kaderrichtlijn water (KRW) zijn beschermde gebieden aangewezen. In deze gebieden gelden aanvullende kwaliteitseisen. Waterbeheerders hebben de opgave om deze beschermde gebieden in te passen in hun waterbeheers- en stroomgebiedbeheersplannen. De beschermde gebieden zijn vastgelegd in het nationaal register beschermde gebieden. Hierin zijn de gebieden opgenomen voor het Nederlandse deel van de internationale stroomgebieddistricten Eems, Rijn, Maas en Schelde. Alleen beschermde gebieden op grond van communautaire regelgeving zijn opgenomen in het register. Het betreft de Natura2000 gebieden (Vogel- en habitatrichtlijn gebieden), zwemwaterlocaties, schelpdierwateren en waterlichamen waaruit onttrekking voor menselijke consumptie plaatsvindt. Het register beschermde gebieden wordt voortdurend gevolgd en bijgewerkt.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg023",
              "content": "vsg023"
            }
          },
          {
            "label": "boringsvije zone",
            "term": "BoringsvijeZone",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/BoringsvijeZone",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als boringsvrije zone.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag322",
              "content": "vag322"
            }
          },
          {
            "label": "compartimentskering",
            "term": "Compartimentskering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Compartimentskering",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een regionale kering die als zodanig geen directe waterkerende functie heeft, tenzij in geval van doorbraak of overstroming van een primaire waterkering.",
            "toelichting": "Regionale kering die als zodanig geen directe waterkerende functie heeft, tenzij in geval van doorbraak of overstroming van een primaire waterkering.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "contour beregeningsbeleid",
            "term": "ContourBeregeningsbeleid",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/ContourBeregeningsbeleid",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waar beregeningsbeleid geldt.",
            "toelichting": "Begrenzing van de gebieden die het beregeningsbeleid van het waterschap vastleggen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          },
          {
            "label": "duingebied",
            "term": "Duingebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Duingebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied met duinen.",
            "toelichting": "Het gebied tussen duinvoet en het achterliggende gebied.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "duinwatergebied",
            "term": "Duinwatergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Duinwatergebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied in de duinen voor het winnen van drinkwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg002",
              "content": "vsg002"
            }
          },
          {
            "label": "gebiedsnorm wateroverlast",
            "term": "GebiedsnormWateroverlast",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/GebiedsnormWateroverlast",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waarvoor normen zijn gesteld omtrent frequentie en mate van toelaatbare wateroverlast.",
            "toelichting": "Gebied waarbij door de provincie normen zijn gesteld omtrent frequentie en mate van toelaatbare wateroverlast.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag529",
              "content": "vag529"
            }
          },
          {
            "label": "grondwaterbeschermingsgebied",
            "term": "Grondwaterbeschermingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Grondwaterbeschermingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waar regels gelden voor de bescherming van de grondwaterkwaliteit in verband met de winning van drinkwater.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag022",
              "content": "vag022"
            }
          },
          {
            "label": "grondwaterdeelgebied",
            "term": "Grondwaterdeelgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Grondwaterdeelgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van gebieden waarbinnen het zelfde grondwaterpeil geldt.",
            "toelichting": "Gebieden waarbinnen het zelfde grondwaterpeil geldt.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg029",
              "content": "vsg029"
            }
          },
          {
            "label": "intrekgebied",
            "term": "Intrekgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Intrekgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als intrekgebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag522",
              "content": "vag522"
            }
          },
          {
            "label": "kade",
            "term": "Kade",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Kade",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een waterkering in de vorm van een beschoeide of gemetselde oeverstrook, waaraan de schepen kunnen aanleggen.",
            "toelichting": "Type waterkering, beschoeide of gemetselde oeverstrook, waaraan de schepen kunnen aanleggen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "kustfundament",
            "term": "Kustfundament",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Kustfundament",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van het kustfundament.",
            "toelichting": "",
            "bron": "https://zoek.officielebekendmakingen.nl/stb-2018-292.html",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg028",
              "content": "vsg028"
            }
          },
          {
            "label": "maatregelengebied",
            "term": "Maatregelengebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Maatregelengebied",
            "definitie": "Waarde voor attribuut groep bij Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waarvoor een programma maatregelen bevat om aan een of meer omgevingswaarden te voldoen of een of meer andere doelstellingen voor de fysieke leefomgeving te bereiken.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag523",
              "content": "vag523"
            }
          },
          {
            "label": "natuurbeek",
            "term": "Natuurbeek",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Natuurbeek",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een oppervlaktewater dat een functie waternatuur heeft, op basis van bestaande of potentiële aquatische of semi-aquatische natuurwaarden.",
            "toelichting": "Een oppervlaktewater dat een functie waternatuur heeft, op basis van bestaande of potentiële aquatische of semi-aquatische natuurwaarden.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg023",
              "content": "vsg023"
            }
          },
          {
            "label": "onderhoudspad",
            "term": "Onderhoudspad",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Onderhoudspad",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een werkpad naast de watergang, gebied binnen de beschermingszone waar aanvullende regels gelden.",
            "toelichting": "Werkpad naast de watergang, gebied binnen de beschermingszone waar aanvullende regels gelden.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg021",
              "content": "vsg021"
            }
          },
          {
            "label": "oppervaktewaterbeschermingsgebied",
            "term": "Oppervaktewaterbeschermingsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Oppervaktewaterbeschermingsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied oppervaktewaterbeschermingsgebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "oppervlaktewaterbeheergebied",
            "term": "Oppervlaktewaterbeheergebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Oppervlaktewaterbeheergebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als oppervlaktewaterbeheergebied.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "oppervlaktewaterlichaam",
            "term": "Oppervlaktewaterlichaam",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Oppervlaktewaterlichaam",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een samenhangend geheel van vrij aan het aardoppervlak voorkomend water, met de daarin aanwezige stoffen, alsmede de bijbehorende bodem, oevers en, voor zover uitdrukkelijk aangewezen krachtens deze wet, drogere oevergebieden, alsmede flora en fauna.",
            "toelichting": "Samenhangend geheel van vrij aan het aardoppervlak voorkomend water, met de daarin aanwezige stoffen, alsmede de bijbehorende bodem, oevers en, voor zover uitdrukkelijk aangewezen krachtens deze wet, drogere oevergebieden, alsmede flora en fauna.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "oppervlaktewaterlichaam primair",
            "term": "OppervlaktewaterlichaamPrimair",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/OppervlaktewaterlichaamPrimair",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een oppervlaktewaterlichaam met een overwegend belang voor het watersysteem.",
            "toelichting": "Oppervlaktewaterlichaam met een overwegend belang voor de watersysteem.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "oppervlaktewaterlichaam profiel van vrije ruimte",
            "term": "OppervlaktewaterlichaamProfielVanVrijeRuimte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/OppervlaktewaterlichaamProfielVanVrijeRuimte",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van de ruimte aan weerszijden van een oppervlaktewaterlichaam die nodig is voor toekomstige verbreding van dat oppervlaktewaterlichaam.",
            "toelichting": "De ruimte te weerszijden van een oppervlaktewaterlichaam die nodig is voor toekomstige verbreding van dat oppervlaktewaterlichaam.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "oppervlaktewaterlichaam secundair",
            "term": "OppervlaktewaterlichaamSecundair",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/OppervlaktewaterlichaamSecundair",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een oppervlaktewaterlichaam met een beperkt belang voor de watersysteem.",
            "toelichting": "Oppervlaktewaterlichaam met een beperkt belang voor de watersysteem.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "oppervlaktewaterlichaam tertiair",
            "term": "OppervlaktewaterlichaamTertiair",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/OppervlaktewaterlichaamTertiair",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van alle overige oppervlaktewaterlichamen die onderdeel zijn van het watersysteem.",
            "toelichting": "Alle overige oppervlaktewaterlichamen die onderdeel zijn van het watersysteem.",
            "bron": "https://wetten.overheid.nl/BWBR0025458/2020-01-01",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "overige gebieden",
            "term": "OverigeGebieden",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/OverigeGebieden",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied wanneer men het Gebiedsaanwijzingtype WaterEnWatersysteem wil gebruiken maar geen van de andere groepen van toepassing is.",
            "toelichting": "Overige gebieden waarvoor regels uit de waterschapsverordening van toepassing zijn.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "peilgebied",
            "term": "Peilgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Peilgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied met een vastgesteld peil: een cluster van afwateringsgebieden waarin één en hetzelfde peil wordt nagestreefd.",
            "toelichting": "Gebieden met een vastgesteld peil; een cluster van afwateringsgebieden waarin één en hetzelfde peil wordt nagestreefd.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vag224",
              "content": "vag224"
            }
          },
          {
            "label": "projectgebied",
            "term": "Projectgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Projectgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied waar regels gelden voor bescherming van toekomstige projecten.",
            "toelichting": "Regels voor bescherming van toekomstige projecten.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg030",
              "content": "vsg030"
            }
          },
          {
            "label": "reserveringsgebied",
            "term": "Reserveringsgebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Reserveringsgebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied ls reserveringsgebied voor water en wataersystemen.",
            "toelichting": "",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          },
          {
            "label": "specifiek benoemd gebied",
            "term": "SpecifiekBenoemdGebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/SpecifiekBenoemdGebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van gebieden bij naam of bijnaam.",
            "toelichting": "Voorbeelden zijn waddenzee en waddengebied.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg027",
              "content": "vsg027"
            }
          },
          {
            "label": "vaarweg",
            "term": "Vaarweg",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Vaarweg",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een water dat kan worden bevaren.",
            "toelichting": "Een water dat kan worden bevaren.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterberging",
            "term": "Waterberging",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Waterberging",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen.",
            "toelichting": "Gebied voor waterstaatkundige doeleinden, niet zijnde een oppervlaktewaterlichaam of onderdeel daarvan, dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen en ook als bergingsgebied op de legger is opgenomen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt129",
              "content": "vsgt129"
            }
          },
          {
            "label": "waterkering",
            "term": "Waterkering",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Waterkering",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van waterkerende en/of -scheidende, kunstmatige of natuurlijke hoogte of hooggelegen gronden, inclusief de daarin aanwezige waterkerende elementen.",
            "toelichting": "Een waterkerende en/of scheidende, kunstmatige of natuurlijke hoogte of hooggelegen gronden inclusief de daarin aanwezige waterkerende elementen.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterkering overig",
            "term": "WaterkeringOverig",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/WaterkeringOverig",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een Waterkering niet zijnde een primaire of regionale waterkering.",
            "toelichting": "Waterkering niet zijnde primair of regionaal.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterkering primair",
            "term": "WaterkeringPrimair",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/WaterkeringPrimair",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een waterkering die bescherming biedt tegen overstroming door water van een oppervlaktewaterlichaam waarvan de waterstand direct invloed ondergaat van hoge stormvloed, hoog opperwater van een van de grote rivieren, hoogwater van het Ijsselmeer of het Markermeer, of een combinatie daarvan, en van het Volkerak-Zoommeer, het Grevelingenmeer, het getijdedeel van de Hollandsche IJssel en de Veluwerandmeren.",
            "toelichting": "Waterkering die bescherming biedt tegen overstroming door water van een oppervlaktewaterlichaam waarvan de waterstand direct invloed ondergaat van hoge stormvloed, hoog opperwater van een van de grote rivieren, hoogwater van het Ijsselmeer of het Markermeer, of een combinatie daarvan, en van het Volkerak-Zoommeer, het Grevelingenmeer, het getijdedeel van de Hollandsche IJssel en de Veluwerandmeren.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterkering profiel van vrije ruimte",
            "term": "WaterkeringProfielVanVrijeRuimte",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/WaterkeringProfielVanVrijeRuimte",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van de ruimte aan weerszijden van en boven een waterkering die nodig is voor toekomstige verbetering van de waterkering.",
            "toelichting": "De ruimte te weerszijden van en boven een waterkering die nodig is voor toekomstige verbetering van de waterkering.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterkering regionaal",
            "term": "WaterkeringRegionaal",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/WaterkeringRegionaal",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een waterkering, niet zijnde een primaire of overige waterkering, die bescherming biedt tegen overstroming door water van een oppervlaktewaterlichaam.",
            "toelichting": "Waterkering, niet zijnde een primaire of overige waterkering, die bescherming biedt tegen overstroming door water van een oppervlaktewaterlichaam.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vah424",
              "content": "vah424"
            }
          },
          {
            "label": "waterstaatswerk",
            "term": "Waterstaatswerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Waterstaatswerk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een oppervlaktewaterlichaam, bergingsgebied, waterkering of ondersteunend kunstwerk.",
            "toelichting": "Oppervlaktewaterlichaam, bergingsgebied, waterkering of ondersteunend kunstwerk.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "watersysteem",
            "term": "Watersysteem",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Watersysteem",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als samenhangend geheel van een of meer oppervlaktewaterlichamen en grondwaterlichamen, met bijbehorende bergingsgebieden, waterkeringen en ondersteunende kunstwerken.",
            "toelichting": "Samenhangend geheel van een of meer oppervlaktewaterlichamen en grondwaterlichamen, met bijbehorende bergingsgebieden, waterkeringen en ondersteunende kunstwerken.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "waterwingebied",
            "term": "Waterwingebied",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Waterwingebied",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied voor het winnen van drinkwater.",
            "toelichting": "Gebied aangewezen voor het winnen van drinkwater.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsgt122",
              "content": "vsgt122"
            }
          },
          {
            "label": "zuiveringtechnisch werk",
            "term": "ZuiveringtechnischWerk",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/ZuiveringtechnischWerk",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als exploitatiegebied voor een werk voor het zuiveren van stedelijk afvalwater.",
            "toelichting": "Werk voor het zuiveren van stedelijk afvalwater, in exploitatie bij een waterschap of gemeente, of een rechtspersoon die door het bestuur van een waterschap met de zuivering van stedelijk afvalwater is belast, met inbegrip van het bij dat werk behorende werk voor het transport van stedelijk afvalwater.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg024",
              "content": "vsg024"
            }
          },
          {
            "label": "zwemlocatie",
            "term": "Zwemlocatie",
            "uri": "http://standaarden.omgevingswet.overheid.nl/waterenwatersysteem/id/concept/Zwemlocatie",
            "definitie": "Waarde voor attribuut groep bij het Gebiedsaanwijzingtype WaterEnWatersysteem voor het aanwijzen van een gebied als zwemlocatie als bedoeld in artikel 2.30 Omgevingswet.",
            "toelichting": "Zwemlocatie als bedoeld in artikel 2.30 van de Omgevingswet ter uitvoering van de zwemwaterrichtlijn.",
            "bron": "",
            "domein": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
            "specialisatie": "",
            "symboolcode": {
              "id": "vsg022",
              "content": "vsg022"
            }
          }
        ]
      },
      "domeinen": {
        "domein": {
          "label": "water en watersysteem",
          "term": "WaterEnWatersysteem",
          "uri": "http://standaarden.omgevingswet.overheid.nl/id/conceptscheme/WaterEnWatersysteem",
          "omschrijving": "Begrippen gerelateerd aan het inhoudelijke (thematische/sectorale) domein van water en watersysteem.",
          "toelichting": ""
        }
      }
    }
  ];
  symboolcodes = {};
  patterns = {};

  constructor() {
    this.addSymboolcodes();
    this.addPatterns();
  }

  getSymboolcode(type, group) {
    const valueDomain = this.valueDomains.find(valueDomain => valueDomain.domeinen.domein.term == type.replace(/^.+\//, ""));
    if (valueDomain == null) {
      console.warn("Could not find value domain for type: " + type);
      return null;
    }
    const value = valueDomain.waarden.waarde.find(waarde => waarde.label == group.waarde);
    if (value == null) {
      console.warn("Could not find value for group: " + group.waarde);
      return null;
    }
    return this.symboolcodes[value.symboolcode.id];
  }

  private addSymboolcodes() {  // v1.1.0 (vlak only)
    this.symboolcodes["vsg001"] = {
      fill: "rgba(235,240,210,0.8)",
      background: "rgba(235,240,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg002"] = {
      fill: "rgba(210,255,165,0.8)",
      background: "rgba(210,255,165,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg003"] = {
      fill: "rgba(180,95,210,0.8)",
      background: "rgba(180,95,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg004"] = {
      fill: "rgba(100,170,45,0.8)",
      background: "rgba(100,170,45,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg005"] = {
      fill: "rgba(255,200,190,0.8)",
      background: "rgba(255,200,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg006"] = {
      fill: "rgba(255,60,130,0.8)",
      background: "rgba(255,60,130,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg007"] = {
      fill: "rgba(255,160,150,0.8)",
      background: "rgba(255,160,150,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg008"] = {
      fill: "rgba(240,145,190,0.8)",
      background: "rgba(240,145,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg009"] = {
      fill: "rgba(255,155,0,0.8)",
      background: "rgba(255,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg010"] = {
      fill: "rgba(40,200,70,0.8)",
      background: "rgba(40,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg011"] = {
      fill: "rgba(255,105,35,0.8)",
      background: "rgba(255,105,35,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg012"] = {
      fill: "rgba(235,195,215,0.8)",
      background: "rgba(235,195,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg013"] = {
      fill: "rgba(155,50,205,0.8)",
      background: "rgba(155,50,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg014"] = {
      fill: "rgba(220,155,120,0.8)",
      background: "rgba(220,155,120,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg015"] = {
      fill: "rgba(0,155,0,0.8)",
      background: "rgba(0,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg016"] = {
      fill: "rgba(130,165,145,0.8)",
      background: "rgba(130,165,145,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg017"] = {
      fill: "rgba(255,120,160,0.8)",
      background: "rgba(255,120,160,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg018"] = {
      fill: "rgba(185,215,70,0.8)",
      background: "rgba(185,215,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg019"] = {
      fill: "rgba(130,200,70,0.8)",
      background: "rgba(130,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg020"] = {
      fill: "rgba(0,0,255,0.8)",
      background: "rgba(0,0,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg021"] = {
      fill: "rgba(205,205,205,0.8)",
      background: "rgba(205,205,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg022"] = {
      fill: "rgba(0,255,255,0.8)",
      background: "rgba(0,255,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg023"] = {
      fill: "rgba(175,205,225,0.8)",
      background: "rgba(175,205,225,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg024"] = {
      fill: "rgba(87,87,255,0.8)",
      background: "rgba(87,87,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg025"] = {
      fill: "rgba(255,0,0,0.8)",
      background: "rgba(255,0,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg026"] = {
      fill: "rgba(255,255,0,0.8)",
      background: "rgba(255,255,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg027"] = {
      fill: "rgba(255,255,180,0.8)",
      background: "rgba(255,255,180,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg028"] = {
      fill: "rgba(200,160,215,0.8)",
      background: "rgba(200,160,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg029"] = {
      fill: "rgba(250,210,255,0.8)",
      background: "rgba(250,210,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg030"] = {
      fill: "rgba(235,225,235,0.8)",
      background: "rgba(235,225,235,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg101"] = {
      fill: "rgba(235,240,210,0.8)",
      background: "rgba(235,240,210,0.8)",
      stroke: "#b9bea0",
      "border-color": "#b9bea0",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg102"] = {
      fill: "rgba(210,255,165,0.8)",
      background: "rgba(210,255,165,0.8)",
      stroke: "#a0cd73",
      "border-color": "#a0cd73",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg103"] = {
      fill: "rgba(180,95,210,0.8)",
      background: "rgba(180,95,210,0.8)",
      stroke: "#822da0",
      "border-color": "#822da0",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg104"] = {
      fill: "rgba(100,170,45,0.8)",
      background: "rgba(100,170,45,0.8)",
      stroke: "#327800",
      "border-color": "#327800",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg105"] = {
      fill: "rgba(255,200,190,0.8)",
      background: "rgba(255,200,190,0.8)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg106"] = {
      fill: "rgba(255,60,130,0.8)",
      background: "rgba(255,60,130,0.8)",
      stroke: "#cd0a50",
      "border-color": "#cd0a50",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg107"] = {
      fill: "rgba(255,160,150,0.8)",
      background: "rgba(255,160,150,0.8)",
      stroke: "#cd6e64",
      "border-color": "#cd6e64",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg108"] = {
      fill: "rgba(240,145,190,0.8)",
      background: "rgba(240,145,190,0.8)",
      stroke: "#be5f8c",
      "border-color": "#be5f8c",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg109"] = {
      fill: "rgba(255,155,0,0.8)",
      background: "rgba(255,155,0,0.8)",
      stroke: "#cd6900",
      "border-color": "#cd6900",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg110"] = {
      fill: "rgba(40,200,70,0.8)",
      background: "rgba(40,200,70,0.8)",
      stroke: "#009614",
      "border-color": "#009614",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg111"] = {
      fill: "rgba(255,105,35,0.8)",
      background: "rgba(255,105,35,0.8)",
      stroke: "#cd3700",
      "border-color": "#cd3700",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg112"] = {
      fill: "rgba(235,195,215,0.8)",
      background: "rgba(235,195,215,0.8)",
      stroke: "#b991a5",
      "border-color": "#b991a5",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg113"] = {
      fill: "rgba(155,50,205,0.8)",
      background: "rgba(155,50,205,0.8)",
      stroke: "#69009b",
      "border-color": "#69009b",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg114"] = {
      fill: "rgba(220,155,120,0.8)",
      background: "rgba(220,155,120,0.8)",
      stroke: "#aa6946",
      "border-color": "#aa6946",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg115"] = {
      fill: "rgba(0,155,0,0.8)",
      background: "rgba(0,155,0,0.8)",
      stroke: "#006900",
      "border-color": "#006900",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg116"] = {
      fill: "rgba(130,165,145,0.8)",
      background: "rgba(130,165,145,0.8)",
      stroke: "#50735f",
      "border-color": "#50735f",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg117"] = {
      fill: "rgba(255,120,160,0.8)",
      background: "rgba(255,120,160,0.8)",
      stroke: "#cd4687",
      "border-color": "#cd4687",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg118"] = {
      fill: "rgba(185,215,70,0.8)",
      background: "rgba(185,215,70,0.8)",
      stroke: "#87a514",
      "border-color": "#87a514",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg119"] = {
      fill: "rgba(130,200,70,0.8)",
      background: "rgba(130,200,70,0.8)",
      stroke: "#509614",
      "border-color": "#509614",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg120"] = {
      fill: "rgba(0,0,255,0.8)",
      background: "rgba(0,0,255,0.8)",
      stroke: "#0000cd",
      "border-color": "#0000cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg121"] = {
      fill: "rgba(205,205,205,0.8)",
      background: "rgba(205,205,205,0.8)",
      stroke: "#9b9b9b",
      "border-color": "#9b9b9b",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg122"] = {
      fill: "rgba(0,255,255,0.8)",
      background: "rgba(0,255,255,0.8)",
      stroke: "#00cdcd",
      "border-color": "#00cdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg123"] = {
      fill: "rgba(175,205,225,0.8)",
      background: "rgba(175,205,225,0.8)",
      stroke: "#7d9baf",
      "border-color": "#7d9baf",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg124"] = {
      fill: "rgba(87,87,255,0.8)",
      background: "rgba(87,87,255,0.8)",
      stroke: "#2525cd",
      "border-color": "#2525cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg125"] = {
      fill: "rgba(255,0,0,0.8)",
      background: "rgba(255,0,0,0.8)",
      stroke: "#cd0000",
      "border-color": "#cd0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg126"] = {
      fill: "rgba(255,255,0,0.8)",
      background: "rgba(255,255,0,0.8)",
      stroke: "#cdcd00",
      "border-color": "#cdcd00",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg127"] = {
      fill: "rgba(255,255,180,0.8)",
      background: "rgba(255,255,180,0.8)",
      stroke: "#cdcd82",
      "border-color": "#cdcd82",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg128"] = {
      fill: "rgba(200,160,215,0.8)",
      background: "rgba(200,160,215,0.8)",
      stroke: "#966ea5",
      "border-color": "#966ea5",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg129"] = {
      fill: "rgba(250,210,255,0.8)",
      background: "rgba(250,210,255,0.8)",
      stroke: "#c8a0cd",
      "border-color": "#c8a0cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsg130"] = {
      fill: "rgba(235,225,235,0.8)",
      background: "rgba(235,225,235,0.8)",
      stroke: "#c8a0cd",
      "border-color": "#c8a0cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt001"] = {
      fill: "rgba(235,240,210,0.5)",
      background: "rgba(235,240,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt002"] = {
      fill: "rgba(210,255,165,0.5)",
      background: "rgba(210,255,165,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt003"] = {
      fill: "rgba(180,95,210,0.5)",
      background: "rgba(180,95,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt004"] = {
      fill: "rgba(100,170,45,0.5)",
      background: "rgba(100,170,45,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt005"] = {
      fill: "rgba(255,200,190,0.5)",
      background: "rgba(255,200,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt006"] = {
      fill: "rgba(255,60,130,0.5)",
      background: "rgba(255,60,130,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt007"] = {
      fill: "rgba(255,160,150,0.5)",
      background: "rgba(255,160,150,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt008"] = {
      fill: "rgba(240,145,190,0.5)",
      background: "rgba(240,145,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt009"] = {
      fill: "rgba(255,155,0,0.5)",
      background: "rgba(255,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt010"] = {
      fill: "rgba(40,200,70,0.5)",
      background: "rgba(40,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt011"] = {
      fill: "rgba(255,105,35,0.5)",
      background: "rgba(255,105,35,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt012"] = {
      fill: "rgba(235,195,215,0.5)",
      background: "rgba(235,195,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt013"] = {
      fill: "rgba(155,50,205,0.5)",
      background: "rgba(155,50,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt014"] = {
      fill: "rgba(220,155,120,0.5)",
      background: "rgba(220,155,120,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt015"] = {
      fill: "rgba(0,155,0,0.5)",
      background: "rgba(0,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt016"] = {
      fill: "rgba(130,165,145,0.5)",
      background: "rgba(130,165,145,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt017"] = {
      fill: "rgba(255,120,160,0.5)",
      background: "rgba(255,120,160,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt018"] = {
      fill: "rgba(185,215,70,0.5)",
      background: "rgba(185,215,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt019"] = {
      fill: "rgba(130,200,70,0.5)",
      background: "rgba(130,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt020"] = {
      fill: "rgba(0,0,255,0.5)",
      background: "rgba(0,0,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt021"] = {
      fill: "rgba(205,205,205,0.5)",
      background: "rgba(205,205,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt022"] = {
      fill: "rgba(0,255,255,0.5)",
      background: "rgba(0,255,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt023"] = {
      fill: "rgba(175,205,225,0.5)",
      background: "rgba(175,205,225,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt024"] = {
      fill: "rgba(87,87,255,0.5)",
      background: "rgba(87,87,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt025"] = {
      fill: "rgba(255,0,0,0.5)",
      background: "rgba(255,0,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt026"] = {
      fill: "rgba(255,255,0,0.5)",
      background: "rgba(255,255,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt027"] = {
      fill: "rgba(255,255,180,0.5)",
      background: "rgba(255,255,180,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt028"] = {
      fill: "rgba(200,160,215,0.5)",
      background: "rgba(200,160,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt029"] = {
      fill: "rgba(250,210,255,0.5)",
      background: "rgba(250,210,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt030"] = {
      fill: "rgba(235,225,235,0.5)",
      background: "rgba(235,225,235,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt101"] = {
      fill: "rgba(235,240,210,0.5)",
      background: "rgba(235,240,210,0.5)",
      stroke: "#b9bea0",
      "border-color": "#b9bea0",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt102"] = {
      fill: "rgba(210,255,165,0.5)",
      background: "rgba(210,255,165,0.5)",
      stroke: "#a0cd73",
      "border-color": "#a0cd73",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt103"] = {
      fill: "rgba(180,95,210,0.5)",
      background: "rgba(180,95,210,0.5)",
      stroke: "#822da0",
      "border-color": "#822da0",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt104"] = {
      fill: "rgba(100,170,45,0.5)",
      background: "rgba(100,170,45,0.5)",
      stroke: "#327800",
      "border-color": "#327800",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt105"] = {
      fill: "rgba(255,200,190,0.5)",
      background: "rgba(255,200,190,0.5)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt106"] = {
      fill: "rgba(255,60,130,0.5)",
      background: "rgba(255,60,130,0.5)",
      stroke: "#cd0a50",
      "border-color": "#cd0a50",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt107"] = {
      fill: "rgba(255,160,150,0.5)",
      background: "rgba(255,160,150,0.5)",
      stroke: "#cd6e64",
      "border-color": "#cd6e64",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt108"] = {
      fill: "rgba(240,145,190,0.5)",
      background: "rgba(240,145,190,0.5)",
      stroke: "#be5f8c",
      "border-color": "#be5f8c",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt109"] = {
      fill: "rgba(255,155,0,0.5)",
      background: "rgba(255,155,0,0.5)",
      stroke: "#cd6900",
      "border-color": "#cd6900",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt110"] = {
      fill: "rgba(40,200,70,0.5)",
      background: "rgba(40,200,70,0.5)",
      stroke: "#009614",
      "border-color": "#009614",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt111"] = {
      fill: "rgba(255,105,35,0.5)",
      background: "rgba(255,105,35,0.5)",
      stroke: "#cd3700",
      "border-color": "#cd3700",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt112"] = {
      fill: "rgba(235,195,215,0.5)",
      background: "rgba(235,195,215,0.5)",
      stroke: "#b991a5",
      "border-color": "#b991a5",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt113"] = {
      fill: "rgba(155,50,205,0.5)",
      background: "rgba(155,50,205,0.5)",
      stroke: "#69009b",
      "border-color": "#69009b",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt114"] = {
      fill: "rgba(220,155,120,0.5)",
      background: "rgba(220,155,120,0.5)",
      stroke: "#aa6946",
      "border-color": "#aa6946",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt115"] = {
      fill: "rgba(0,155,0,0.5)",
      background: "rgba(0,155,0,0.5)",
      stroke: "#006900",
      "border-color": "#006900",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt116"] = {
      fill: "rgba(130,165,145,0.5)",
      background: "rgba(130,165,145,0.5)",
      stroke: "#50735f",
      "border-color": "#50735f",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt117"] = {
      fill: "rgba(255,120,160,0.5)",
      background: "rgba(255,120,160,0.5)",
      stroke: "#cd4687",
      "border-color": "#cd4687",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt118"] = {
      fill: "rgba(185,215,70,0.5)",
      background: "rgba(185,215,70,0.5)",
      stroke: "#87a514",
      "border-color": "#87a514",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt119"] = {
      fill: "rgba(130,200,70,0.5)",
      background: "rgba(130,200,70,0.5)",
      stroke: "#509614",
      "border-color": "#509614",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt120"] = {
      fill: "rgba(0,0,255,0.5)",
      background: "rgba(0,0,255,0.5)",
      stroke: "#0000cd",
      "border-color": "#0000cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt121"] = {
      fill: "rgba(205,205,205,0.5)",
      background: "rgba(205,205,205,0.5)",
      stroke: "#9b9b9b",
      "border-color": "#9b9b9b",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt122"] = {
      fill: "rgba(0,255,255,0.5)",
      background: "rgba(0,255,255,0.5)",
      stroke: "#00cdcd",
      "border-color": "#00cdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt123"] = {
      fill: "rgba(175,205,225,0.5)",
      background: "rgba(175,205,225,0.5)",
      stroke: "#7d9baf",
      "border-color": "#7d9baf",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt124"] = {
      fill: "rgba(87,87,255,0.5)",
      background: "rgba(87,87,255,0.5)",
      stroke: "#2525cd",
      "border-color": "#2525cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt125"] = {
      fill: "rgba(255,0,0,0.5)",
      background: "rgba(255,0,0,0.5)",
      stroke: "#cd0000",
      "border-color": "#cd0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt126"] = {
      fill: "rgba(255,255,0,0.5)",
      background: "rgba(255,255,0,0.5)",
      stroke: "#cdcd00",
      "border-color": "#cdcd00",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt127"] = {
      fill: "rgba(255,255,180,0.5)",
      background: "rgba(255,255,180,0.5)",
      stroke: "#cdcd82",
      "border-color": "#cdcd82",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt128"] = {
      fill: "rgba(200,160,215,0.5)",
      background: "rgba(200,160,215,0.5)",
      stroke: "#966ea5",
      "border-color": "#966ea5",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt129"] = {
      fill: "rgba(250,210,255,0.5)",
      background: "rgba(250,210,255,0.5)",
      stroke: "#c8a0cd",
      "border-color": "#c8a0cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsgt130"] = {
      fill: "rgba(235,225,235,0.5)",
      background: "rgba(235,225,235,0.5)",
      stroke: "#c3b9c3",
      "border-color": "#c3b9c3",
      "stroke-width": "3px",
      "border-width": "3px",
      "border-style": "solid"
    };
    this.symboolcodes["vsh001"] = {
      fill: "rgba(235,240,210,0.8)",
      background: "rgba(235,240,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh002"] = {
      fill: "rgba(210,255,165,0.8)",
      background: "rgba(210,255,165,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh003"] = {
      fill: "rgba(180,95,210,0.8)",
      background: "rgba(180,95,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh004"] = {
      fill: "rgba(100,170,45,0.8)",
      background: "rgba(100,170,45,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh005"] = {
      fill: "rgba(255,200,190,0.8)",
      background: "rgba(255,200,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh006"] = {
      fill: "rgba(255,60,130,0.8)",
      background: "rgba(255,60,130,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh007"] = {
      fill: "rgba(255,160,150,0.8)",
      background: "rgba(255,160,150,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh008"] = {
      fill: "rgba(240,145,190,0.8)",
      background: "rgba(240,145,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh009"] = {
      fill: "rgba(255,155,0,0.8)",
      background: "rgba(255,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh010"] = {
      fill: "rgba(40,200,70,0.8)",
      background: "rgba(40,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh011"] = {
      fill: "rgba(255,105,35,0.8)",
      background: "rgba(255,105,35,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh012"] = {
      fill: "rgba(235,195,215,0.8)",
      background: "rgba(235,195,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh013"] = {
      fill: "rgba(155,50,205,0.8)",
      background: "rgba(155,50,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh014"] = {
      fill: "rgba(220,155,120,0.8)",
      background: "rgba(220,155,120,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh015"] = {
      fill: "rgba(0,155,0,0.8)",
      background: "rgba(0,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh016"] = {
      fill: "rgba(130,165,145,0.8)",
      background: "rgba(130,165,145,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh017"] = {
      fill: "rgba(255,120,160,0.8)",
      background: "rgba(255,120,160,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh018"] = {
      fill: "rgba(185,215,70,0.8)",
      background: "rgba(185,215,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh019"] = {
      fill: "rgba(130,200,70,0.8)",
      background: "rgba(130,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh020"] = {
      fill: "rgba(0,0,255,0.8)",
      background: "rgba(0,0,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh021"] = {
      fill: "rgba(205,205,205,0.8)",
      background: "rgba(205,205,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh022"] = {
      fill: "rgba(0,255,255,0.8)",
      background: "rgba(0,255,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh023"] = {
      fill: "rgba(175,205,225,0.8)",
      background: "rgba(175,205,225,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh024"] = {
      fill: "rgba(87,87,255,0.8)",
      background: "rgba(87,87,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh025"] = {
      fill: "rgba(255,0,0,0.8)",
      background: "rgba(255,0,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh026"] = {
      fill: "rgba(255,255,0,0.8)",
      background: "rgba(255,255,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh027"] = {
      fill: "rgba(255,255,180,0.8)",
      background: "rgba(255,255,180,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh028"] = {
      fill: "rgba(200,160,215,0.8)",
      background: "rgba(200,160,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh029"] = {
      fill: "rgba(250,210,255,0.8)",
      background: "rgba(250,210,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh030"] = {
      fill: "rgba(235,225,235,0.8)",
      background: "rgba(235,225,235,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh101"] = {
      fill: "rgba(235,240,210,0.8)",
      background: "rgba(235,240,210,0.8)",
      stroke: "#b9bea0",
      "border-color": "#b9bea0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh102"] = {
      fill: "rgba(210,255,165,0.8)",
      background: "rgba(210,255,165,0.8)",
      stroke: "#a0cd73",
      "border-color": "#a0cd73",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh103"] = {
      fill: "rgba(180,95,210,0.8)",
      background: "rgba(180,95,210,0.8)",
      stroke: "#822da0",
      "border-color": "#822da0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh104"] = {
      fill: "rgba(100,170,45,0.8)",
      background: "rgba(100,170,45,0.8)",
      stroke: "#327800",
      "border-color": "#327800",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh105"] = {
      fill: "rgba(255,200,190,0.8)",
      background: "rgba(255,200,190,0.8)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh106"] = {
      fill: "rgba(255,60,130,0.8)",
      background: "rgba(255,60,130,0.8)",
      stroke: "#cd0a50",
      "border-color": "#cd0a50",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh107"] = {
      fill: "rgba(255,160,150,0.8)",
      background: "rgba(255,160,150,0.8)",
      stroke: "#cd6e64",
      "border-color": "#cd6e64",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh108"] = {
      fill: "rgba(240,145,190,0.8)",
      background: "rgba(240,145,190,0.8)",
      stroke: "#be5f8c",
      "border-color": "#be5f8c",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh109"] = {
      fill: "rgba(255,155,0,0.8)",
      background: "rgba(255,155,0,0.8)",
      stroke: "#cd6900",
      "border-color": "#cd6900",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh110"] = {
      fill: "rgba(40,200,70,0.8)",
      background: "rgba(40,200,70,0.8)",
      stroke: "#009614",
      "border-color": "#009614",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh111"] = {
      fill: "rgba(255,105,35,0.8)",
      background: "rgba(255,105,35,0.8)",
      stroke: "#cd3700",
      "border-color": "#cd3700",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh112"] = {
      fill: "rgba(235,195,215,0.8)",
      background: "rgba(235,195,215,0.8)",
      stroke: "#b991a5",
      "border-color": "#b991a5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh113"] = {
      fill: "rgba(155,50,205,0.8)",
      background: "rgba(155,50,205,0.8)",
      stroke: "#69009b",
      "border-color": "#69009b",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh114"] = {
      fill: "rgba(220,155,120,0.8)",
      background: "rgba(220,155,120,0.8)",
      stroke: "#aa6946",
      "border-color": "#aa6946",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh115"] = {
      fill: "rgba(0,155,0,0.8)",
      background: "rgba(0,155,0,0.8)",
      stroke: "#006900",
      "border-color": "#006900",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh116"] = {
      fill: "rgba(130,165,145,0.8)",
      background: "rgba(130,165,145,0.8)",
      stroke: "#50735f",
      "border-color": "#50735f",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh117"] = {
      fill: "rgba(255,120,160,0.8)",
      background: "rgba(255,120,160,0.8)",
      stroke: "#cd4687",
      "border-color": "#cd4687",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh118"] = {
      fill: "rgba(185,215,70,0.8)",
      background: "rgba(185,215,70,0.8)",
      stroke: "#87a514",
      "border-color": "#87a514",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh119"] = {
      fill: "rgba(130,200,70,0.8)",
      background: "rgba(130,200,70,0.8)",
      stroke: "#509614",
      "border-color": "#509614",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh120"] = {
      fill: "rgba(0,0,255,0.8)",
      background: "rgba(0,0,255,0.8)",
      stroke: "#0000cd",
      "border-color": "#0000cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh121"] = {
      fill: "rgba(205,205,205,0.8)",
      background: "rgba(205,205,205,0.8)",
      stroke: "#9b9b9b",
      "border-color": "#9b9b9b",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh122"] = {
      fill: "rgba(0,255,255,0.8)",
      background: "rgba(0,255,255,0.8)",
      stroke: "#00cdcd",
      "border-color": "#00cdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh123"] = {
      fill: "rgba(175,205,225,0.8)",
      background: "rgba(175,205,225,0.8)",
      stroke: "#7d9baf",
      "border-color": "#7d9baf",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh124"] = {
      fill: "rgba(87,87,255,0.8)",
      background: "rgba(87,87,255,0.8)",
      stroke: "#2525cd",
      "border-color": "#2525cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh125"] = {
      fill: "rgba(255,0,0,0.8)",
      background: "rgba(255,0,0,0.8)",
      stroke: "#cd0000",
      "border-color": "#cd0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh126"] = {
      fill: "rgba(255,255,0,0.8)",
      background: "rgba(255,255,0,0.8)",
      stroke: "#cdcd00",
      "border-color": "#cdcd00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh127"] = {
      fill: "rgba(255,255,180,0.8)",
      background: "rgba(255,255,180,0.8)",
      stroke: "#cdcd82",
      "border-color": "#cdcd82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh128"] = {
      fill: "rgba(200,160,215,0.8)",
      background: "rgba(200,160,215,0.8)",
      stroke: "#966ea5",
      "border-color": "#966ea5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh129"] = {
      fill: "rgba(250,210,255,0.8)",
      background: "rgba(250,210,255,0.8)",
      stroke: "#c8a0cd",
      "border-color": "#c8a0cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsh130"] = {
      fill: "rgba(235,225,235,0.8)",
      background: "rgba(235,225,235,0.8)",
      stroke: "#c3b9c3",
      "border-color": "#c3b9c3",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht001"] = {
      fill: "rgba(235,240,210,0.5)",
      background: "rgba(235,240,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht002"] = {
      fill: "rgba(210,255,165,0.5)",
      background: "rgba(210,255,165,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht003"] = {
      fill: "rgba(180,95,210,0.5)",
      background: "rgba(180,95,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht004"] = {
      fill: "rgba(100,170,45,0.5)",
      background: "rgba(100,170,45,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht005"] = {
      fill: "rgba(255,200,190,0.5)",
      background: "rgba(255,200,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht006"] = {
      fill: "rgba(255,60,130,0.5)",
      background: "rgba(255,60,130,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht007"] = {
      fill: "rgba(255,160,150,0.5)",
      background: "rgba(255,160,150,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht008"] = {
      fill: "rgba(240,145,190,0.5)",
      background: "rgba(240,145,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht009"] = {
      fill: "rgba(255,155,0,0.5)",
      background: "rgba(255,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht010"] = {
      fill: "rgba(40,200,70,0.5)",
      background: "rgba(40,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht011"] = {
      fill: "rgba(255,105,35,0.5)",
      background: "rgba(255,105,35,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht012"] = {
      fill: "rgba(235,195,215,0.5)",
      background: "rgba(235,195,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht013"] = {
      fill: "rgba(155,50,205,0.5)",
      background: "rgba(155,50,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht014"] = {
      fill: "rgba(220,155,120,0.5)",
      background: "rgba(220,155,120,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht015"] = {
      fill: "rgba(0,155,0,0.5)",
      background: "rgba(0,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht016"] = {
      fill: "rgba(130,165,145,0.5)",
      background: "rgba(130,165,145,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht017"] = {
      fill: "rgba(255,120,160,0.5)",
      background: "rgba(255,120,160,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht018"] = {
      fill: "rgba(185,215,70,0.5)",
      background: "rgba(185,215,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht019"] = {
      fill: "rgba(130,200,70,0.5)",
      background: "rgba(130,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht020"] = {
      fill: "rgba(0,0,255,0.5)",
      background: "rgba(0,0,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht021"] = {
      fill: "rgba(205,205,205,0.5)",
      background: "rgba(205,205,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht022"] = {
      fill: "rgba(0,255,255,0.5)",
      background: "rgba(0,255,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht023"] = {
      fill: "rgba(175,205,225,0.5)",
      background: "rgba(175,205,225,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht024"] = {
      fill: "rgba(87,87,255,0.5)",
      background: "rgba(87,87,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht025"] = {
      fill: "rgba(255,0,0,0.5)",
      background: "rgba(255,0,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht026"] = {
      fill: "rgba(255,255,0,0.5)",
      background: "rgba(255,255,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht027"] = {
      fill: "rgba(255,255,180,0.5)",
      background: "rgba(255,255,180,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht028"] = {
      fill: "rgba(200,160,215,0.5)",
      background: "rgba(200,160,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht029"] = {
      fill: "rgba(250,210,255,0.5)",
      background: "rgba(250,210,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht030"] = {
      fill: "rgba(235,225,235,0.5)",
      background: "rgba(235,225,235,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht101"] = {
      fill: "rgba(235,240,210,0.5)",
      background: "rgba(235,240,210,0.5)",
      stroke: "#b9bea0",
      "border-color": "#b9bea0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht102"] = {
      fill: "rgba(210,255,165,0.5)",
      background: "rgba(210,255,165,0.5)",
      stroke: "#a0cd73",
      "border-color": "#a0cd73",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht103"] = {
      fill: "rgba(180,95,210,0.5)",
      background: "rgba(180,95,210,0.5)",
      stroke: "#822da0",
      "border-color": "#822da0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht104"] = {
      fill: "rgba(100,170,45,0.5)",
      background: "rgba(100,170,45,0.5)",
      stroke: "#327800",
      "border-color": "#327800",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht105"] = {
      fill: "rgba(255,200,190,0.5)",
      background: "rgba(255,200,190,0.5)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht106"] = {
      fill: "rgba(255,60,130,0.5)",
      background: "rgba(255,60,130,0.5)",
      stroke: "#cd0a50",
      "border-color": "#cd0a50",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht107"] = {
      fill: "rgba(255,160,150,0.5)",
      background: "rgba(255,160,150,0.5)",
      stroke: "#cd6e64",
      "border-color": "#cd6e64",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht108"] = {
      fill: "rgba(240,145,190,0.5)",
      background: "rgba(240,145,190,0.5)",
      stroke: "#be5f8c",
      "border-color": "#be5f8c",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht109"] = {
      fill: "rgba(255,155,0,0.5)",
      background: "rgba(255,155,0,0.5)",
      stroke: "#cd6900",
      "border-color": "#cd6900",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht110"] = {
      fill: "rgba(40,200,70,0.5)",
      background: "rgba(40,200,70,0.5)",
      stroke: "#009614",
      "border-color": "#009614",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht111"] = {
      fill: "rgba(255,105,35,0.5)",
      background: "rgba(255,105,35,0.5)",
      stroke: "#cd3700",
      "border-color": "#cd3700",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht112"] = {
      fill: "rgba(235,195,215,0.5)",
      background: "rgba(235,195,215,0.5)",
      stroke: "#b991a5",
      "border-color": "#b991a5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht113"] = {
      fill: "rgba(155,50,205,0.5)",
      background: "rgba(155,50,205,0.5)",
      stroke: "#69009b",
      "border-color": "#69009b",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht114"] = {
      fill: "rgba(220,155,120,0.5)",
      background: "rgba(220,155,120,0.5)",
      stroke: "#aa6946",
      "border-color": "#aa6946",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht115"] = {
      fill: "rgba(0,155,0,0.5)",
      background: "rgba(0,155,0,0.5)",
      stroke: "#006900",
      "border-color": "#006900",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht116"] = {
      fill: "rgba(130,165,145,0.5)",
      background: "rgba(130,165,145,0.5)",
      stroke: "#50735f",
      "border-color": "#50735f",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht117"] = {
      fill: "rgba(255,120,160,0.5)",
      background: "rgba(255,120,160,0.5)",
      stroke: "#cd4687",
      "border-color": "#cd4687",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht118"] = {
      fill: "rgba(185,215,70,0.5)",
      background: "rgba(185,215,70,0.5)",
      stroke: "#87a514",
      "border-color": "#87a514",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht119"] = {
      fill: "rgba(130,200,70,0.5)",
      background: "rgba(130,200,70,0.5)",
      stroke: "#509614",
      "border-color": "#509614",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht120"] = {
      fill: "rgba(0,0,255,0.5)",
      background: "rgba(0,0,255,0.5)",
      stroke: "#0000cd",
      "border-color": "#0000cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht121"] = {
      fill: "rgba(205,205,205,0.5)",
      background: "rgba(205,205,205,0.5)",
      stroke: "#9b9b9b",
      "border-color": "#9b9b9b",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht122"] = {
      fill: "rgba(0,255,255,0.5)",
      background: "rgba(0,255,255,0.5)",
      stroke: "#00cdcd",
      "border-color": "#00cdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht123"] = {
      fill: "rgba(175,205,225,0.5)",
      background: "rgba(175,205,225,0.5)",
      stroke: "#7d9baf",
      "border-color": "#7d9baf",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht124"] = {
      fill: "rgba(87,87,255,0.5)",
      background: "rgba(87,87,255,0.5)",
      stroke: "#2525cd",
      "border-color": "#2525cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht125"] = {
      fill: "rgba(255,0,0,0.5)",
      background: "rgba(255,0,0,0.5)",
      stroke: "#cd0000",
      "border-color": "#cd0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht126"] = {
      fill: "rgba(255,255,0,0.5)",
      background: "rgba(255,255,0,0.5)",
      stroke: "#cdcd00",
      "border-color": "#cdcd00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht127"] = {
      fill: "rgba(255,255,180,0.5)",
      background: "rgba(255,255,180,0.5)",
      stroke: "#cdcd82",
      "border-color": "#cdcd82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht128"] = {
      fill: "rgba(200,160,215,0.5)",
      background: "rgba(200,160,215,0.5)",
      stroke: "#966ea5",
      "border-color": "#966ea5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht129"] = {
      fill: "rgba(250,210,255,0.5)",
      background: "rgba(250,210,255,0.5)",
      stroke: "#c8a0cd",
      "border-color": "#c8a0cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsht130"] = {
      fill: "rgba(235,225,235,0.5)",
      background: "rgba(235,225,235,0.5)",
      stroke: "#c3b9c3",
      "border-color": "#c3b9c3",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vsz001"] = {
      fill: "rgba(235,240,210,0.8)",
      background: "rgba(235,240,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz002"] = {
      fill: "rgba(210,255,165,0.8)",
      background: "rgba(210,255,165,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz003"] = {
      fill: "rgba(180,95,210,0.8)",
      background: "rgba(180,95,210,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz004"] = {
      fill: "rgba(100,170,45,0.8)",
      background: "rgba(100,170,45,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz005"] = {
      fill: "rgba(255,200,190,0.8)",
      background: "rgba(255,200,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz006"] = {
      fill: "rgba(255,60,130,0.8)",
      background: "rgba(255,60,130,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz007"] = {
      fill: "rgba(255,160,150,0.8)",
      background: "rgba(255,160,150,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz008"] = {
      fill: "rgba(240,145,190,0.8)",
      background: "rgba(240,145,190,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz009"] = {
      fill: "rgba(255,155,0,0.8)",
      background: "rgba(255,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz010"] = {
      fill: "rgba(40,200,70,0.8)",
      background: "rgba(40,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz011"] = {
      fill: "rgba(255,105,35,0.8)",
      background: "rgba(255,105,35,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz012"] = {
      fill: "rgba(235,195,215,0.8)",
      background: "rgba(235,195,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz013"] = {
      fill: "rgba(155,50,205,0.8)",
      background: "rgba(155,50,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz014"] = {
      fill: "rgba(220,155,120,0.8)",
      background: "rgba(220,155,120,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz015"] = {
      fill: "rgba(0,155,0,0.8)",
      background: "rgba(0,155,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz016"] = {
      fill: "rgba(130,165,145,0.8)",
      background: "rgba(130,165,145,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz017"] = {
      fill: "rgba(255,120,160,0.8)",
      background: "rgba(255,120,160,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz018"] = {
      fill: "rgba(185,215,70,0.8)",
      background: "rgba(185,215,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz019"] = {
      fill: "rgba(130,200,70,0.8)",
      background: "rgba(130,200,70,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz020"] = {
      fill: "rgba(0,0,255,0.8)",
      background: "rgba(0,0,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz021"] = {
      fill: "rgba(205,205,205,0.8)",
      background: "rgba(205,205,205,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz022"] = {
      fill: "rgba(0,255,255,0.8)",
      background: "rgba(0,255,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz023"] = {
      fill: "rgba(175,205,225,0.8)",
      background: "rgba(175,205,225,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz024"] = {
      fill: "rgba(87,87,255,0.8)",
      background: "rgba(87,87,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz025"] = {
      fill: "rgba(255,0,0,0.8)",
      background: "rgba(255,0,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz026"] = {
      fill: "rgba(255,255,0,0.8)",
      background: "rgba(255,255,0,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz027"] = {
      fill: "rgba(255,255,180,0.8)",
      background: "rgba(255,255,180,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz028"] = {
      fill: "rgba(200,160,215,0.8)",
      background: "rgba(200,160,215,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz029"] = {
      fill: "rgba(250,210,255,0.8)",
      background: "rgba(250,210,255,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vsz030"] = {
      fill: "rgba(235,225,235,0.8)",
      background: "rgba(235,225,235,0.8)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt001"] = {
      fill: "rgba(235,240,210,0.5)",
      background: "rgba(235,240,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt002"] = {
      fill: "rgba(210,255,165,0.5)",
      background: "rgba(210,255,165,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt003"] = {
      fill: "rgba(180,95,210,0.5)",
      background: "rgba(180,95,210,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt004"] = {
      fill: "rgba(100,170,45,0.5)",
      background: "rgba(100,170,45,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt005"] = {
      fill: "rgba(255,200,190,0.5)",
      background: "rgba(255,200,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt006"] = {
      fill: "rgba(255,60,130,0.5)",
      background: "rgba(255,60,130,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt007"] = {
      fill: "rgba(255,160,150,0.5)",
      background: "rgba(255,160,150,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt008"] = {
      fill: "rgba(240,145,190,0.5)",
      background: "rgba(240,145,190,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt009"] = {
      fill: "rgba(255,155,0,0.5)",
      background: "rgba(255,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt010"] = {
      fill: "rgba(40,200,70,0.5)",
      background: "rgba(40,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt011"] = {
      fill: "rgba(255,105,35,0.5)",
      background: "rgba(255,105,35,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt012"] = {
      fill: "rgba(235,195,215,0.5)",
      background: "rgba(235,195,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt013"] = {
      fill: "rgba(155,50,205,0.5)",
      background: "rgba(155,50,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt014"] = {
      fill: "rgba(220,155,120,0.5)",
      background: "rgba(220,155,120,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt015"] = {
      fill: "rgba(0,155,0,0.5)",
      background: "rgba(0,155,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt016"] = {
      fill: "rgba(130,165,145,0.5)",
      background: "rgba(130,165,145,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt017"] = {
      fill: "rgba(255,120,160,0.5)",
      background: "rgba(255,120,160,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt018"] = {
      fill: "rgba(185,215,70,0.5)",
      background: "rgba(185,215,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt019"] = {
      fill: "rgba(130,200,70,0.5)",
      background: "rgba(130,200,70,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt020"] = {
      fill: "rgba(0,0,255,0.5)",
      background: "rgba(0,0,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt021"] = {
      fill: "rgba(205,205,205,0.5)",
      background: "rgba(205,205,205,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt022"] = {
      fill: "rgba(0,255,255,0.5)",
      background: "rgba(0,255,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt023"] = {
      fill: "rgba(175,205,225,0.5)",
      background: "rgba(175,205,225,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt024"] = {
      fill: "rgba(87,87,255,0.5)",
      background: "rgba(87,87,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt025"] = {
      fill: "rgba(255,0,0,0.5)",
      background: "rgba(255,0,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt026"] = {
      fill: "rgba(255,255,0,0.5)",
      background: "rgba(255,255,0,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt027"] = {
      fill: "rgba(255,255,180,0.5)",
      background: "rgba(255,255,180,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt028"] = {
      fill: "rgba(200,160,215,0.5)",
      background: "rgba(200,160,215,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt029"] = {
      fill: "rgba(250,210,255,0.5)",
      background: "rgba(250,210,255,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vszt030"] = {
      fill: "rgba(235,225,235,0.5)",
      background: "rgba(235,225,235,0.5)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag000"] = {
      fill: "url('assets/symbols/va000.png')",
      background: "url('assets/symbols/va000.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag001"] = {
      fill: "url('assets/symbols/va001.png')",
      background: "url('assets/symbols/va001.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag002"] = {
      fill: "url('assets/symbols/va002.png')",
      background: "url('assets/symbols/va002.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag003"] = {
      fill: "url('assets/symbols/va003.png')",
      background: "url('assets/symbols/va003.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag004"] = {
      fill: "url('assets/symbols/va004.png')",
      background: "url('assets/symbols/va004.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag005"] = {
      fill: "url('assets/symbols/va005.png')",
      background: "url('assets/symbols/va005.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag006"] = {
      fill: "url('assets/symbols/va006.png')",
      background: "url('assets/symbols/va006.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag007"] = {
      fill: "url('assets/symbols/va007.png')",
      background: "url('assets/symbols/va007.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag008"] = {
      fill: "url('assets/symbols/va008.png')",
      background: "url('assets/symbols/va008.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag009"] = {
      fill: "url('assets/symbols/va009.png')",
      background: "url('assets/symbols/va009.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag010"] = {
      fill: "url('assets/symbols/va010.png')",
      background: "url('assets/symbols/va010.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag011"] = {
      fill: "url('assets/symbols/va011.png')",
      background: "url('assets/symbols/va011.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag012"] = {
      fill: "url('assets/symbols/va012.png')",
      background: "url('assets/symbols/va012.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag013"] = {
      fill: "url('assets/symbols/va013.png')",
      background: "url('assets/symbols/va013.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag014"] = {
      fill: "url('assets/symbols/va014.png')",
      background: "url('assets/symbols/va014.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag015"] = {
      fill: "url('assets/symbols/va015.png')",
      background: "url('assets/symbols/va015.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag016"] = {
      fill: "url('assets/symbols/va016.png')",
      background: "url('assets/symbols/va016.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag017"] = {
      fill: "url('assets/symbols/va017.png')",
      background: "url('assets/symbols/va017.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag018"] = {
      fill: "url('assets/symbols/va018.png')",
      background: "url('assets/symbols/va018.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag019"] = {
      fill: "url('assets/symbols/va019.png')",
      background: "url('assets/symbols/va019.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag020"] = {
      fill: "url('assets/symbols/va020.png')",
      background: "url('assets/symbols/va020.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag021"] = {
      fill: "url('assets/symbols/va021.png')",
      background: "url('assets/symbols/va021.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag022"] = {
      fill: "url('assets/symbols/va022.png')",
      background: "url('assets/symbols/va022.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag023"] = {
      fill: "url('assets/symbols/va023.png')",
      background: "url('assets/symbols/va023.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag024"] = {
      fill: "url('assets/symbols/va024.png')",
      background: "url('assets/symbols/va024.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag025"] = {
      fill: "url('assets/symbols/va025.png')",
      background: "url('assets/symbols/va025.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag026"] = {
      fill: "url('assets/symbols/va026.png')",
      background: "url('assets/symbols/va026.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag027"] = {
      fill: "url('assets/symbols/va027.png')",
      background: "url('assets/symbols/va027.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag028"] = {
      fill: "url('assets/symbols/va028.png')",
      background: "url('assets/symbols/va028.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag029"] = {
      fill: "url('assets/symbols/va029.png')",
      background: "url('assets/symbols/va029.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag030"] = {
      fill: "url('assets/symbols/va030.png')",
      background: "url('assets/symbols/va030.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag100"] = {
      fill: "url('assets/symbols/va100.png')",
      background: "url('assets/symbols/va100.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag101"] = {
      fill: "url('assets/symbols/va101.png')",
      background: "url('assets/symbols/va101.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag102"] = {
      fill: "url('assets/symbols/va102.png')",
      background: "url('assets/symbols/va102.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag103"] = {
      fill: "url('assets/symbols/va103.png')",
      background: "url('assets/symbols/va103.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag104"] = {
      fill: "url('assets/symbols/va104.png')",
      background: "url('assets/symbols/va104.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag105"] = {
      fill: "url('assets/symbols/va105.png')",
      background: "url('assets/symbols/va105.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag106"] = {
      fill: "url('assets/symbols/va106.png')",
      background: "url('assets/symbols/va106.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag107"] = {
      fill: "url('assets/symbols/va107.png')",
      background: "url('assets/symbols/va107.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag108"] = {
      fill: "url('assets/symbols/va108.png')",
      background: "url('assets/symbols/va108.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag109"] = {
      fill: "url('assets/symbols/va109.png')",
      background: "url('assets/symbols/va109.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag110"] = {
      fill: "url('assets/symbols/va110.png')",
      background: "url('assets/symbols/va110.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag111"] = {
      fill: "url('assets/symbols/va111.png')",
      background: "url('assets/symbols/va111.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag112"] = {
      fill: "url('assets/symbols/va112.png')",
      background: "url('assets/symbols/va112.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag113"] = {
      fill: "url('assets/symbols/va113.png')",
      background: "url('assets/symbols/va113.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag114"] = {
      fill: "url('assets/symbols/va114.png')",
      background: "url('assets/symbols/va114.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag115"] = {
      fill: "url('assets/symbols/va115.png')",
      background: "url('assets/symbols/va115.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag116"] = {
      fill: "url('assets/symbols/va116.png')",
      background: "url('assets/symbols/va116.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag117"] = {
      fill: "url('assets/symbols/va117.png')",
      background: "url('assets/symbols/va117.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag118"] = {
      fill: "url('assets/symbols/va118.png')",
      background: "url('assets/symbols/va118.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag119"] = {
      fill: "url('assets/symbols/va119.png')",
      background: "url('assets/symbols/va119.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag120"] = {
      fill: "url('assets/symbols/va120.png')",
      background: "url('assets/symbols/va120.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag121"] = {
      fill: "url('assets/symbols/va121.png')",
      background: "url('assets/symbols/va121.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag122"] = {
      fill: "url('assets/symbols/va122.png')",
      background: "url('assets/symbols/va122.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag123"] = {
      fill: "url('assets/symbols/va123.png')",
      background: "url('assets/symbols/va123.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag124"] = {
      fill: "url('assets/symbols/va124.png')",
      background: "url('assets/symbols/va124.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag125"] = {
      fill: "url('assets/symbols/va125.png')",
      background: "url('assets/symbols/va125.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag126"] = {
      fill: "url('assets/symbols/va126.png')",
      background: "url('assets/symbols/va126.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag127"] = {
      fill: "url('assets/symbols/va127.png')",
      background: "url('assets/symbols/va127.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag128"] = {
      fill: "url('assets/symbols/va128.png')",
      background: "url('assets/symbols/va128.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag129"] = {
      fill: "url('assets/symbols/va129.png')",
      background: "url('assets/symbols/va129.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag130"] = {
      fill: "url('assets/symbols/va130.png')",
      background: "url('assets/symbols/va130.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag200"] = {
      fill: "url('assets/symbols/va200.png')",
      background: "url('assets/symbols/va200.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag201"] = {
      fill: "url('assets/symbols/va201.png')",
      background: "url('assets/symbols/va201.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag202"] = {
      fill: "url('assets/symbols/va202.png')",
      background: "url('assets/symbols/va202.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag203"] = {
      fill: "url('assets/symbols/va203.png')",
      background: "url('assets/symbols/va203.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag204"] = {
      fill: "url('assets/symbols/va204.png')",
      background: "url('assets/symbols/va204.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag205"] = {
      fill: "url('assets/symbols/va205.png')",
      background: "url('assets/symbols/va205.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag206"] = {
      fill: "url('assets/symbols/va206.png')",
      background: "url('assets/symbols/va206.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag207"] = {
      fill: "url('assets/symbols/va207.png')",
      background: "url('assets/symbols/va207.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag208"] = {
      fill: "url('assets/symbols/va208.png')",
      background: "url('assets/symbols/va208.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag209"] = {
      fill: "url('assets/symbols/va209.png')",
      background: "url('assets/symbols/va209.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag210"] = {
      fill: "url('assets/symbols/va210.png')",
      background: "url('assets/symbols/va210.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag211"] = {
      fill: "url('assets/symbols/va211.png')",
      background: "url('assets/symbols/va211.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag212"] = {
      fill: "url('assets/symbols/va212.png')",
      background: "url('assets/symbols/va212.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag213"] = {
      fill: "url('assets/symbols/va213.png')",
      background: "url('assets/symbols/va213.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag214"] = {
      fill: "url('assets/symbols/va214.png')",
      background: "url('assets/symbols/va214.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag215"] = {
      fill: "url('assets/symbols/va215.png')",
      background: "url('assets/symbols/va215.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag216"] = {
      fill: "url('assets/symbols/va216.png')",
      background: "url('assets/symbols/va216.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag217"] = {
      fill: "url('assets/symbols/va217.png')",
      background: "url('assets/symbols/va217.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag218"] = {
      fill: "url('assets/symbols/va218.png')",
      background: "url('assets/symbols/va218.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag219"] = {
      fill: "url('assets/symbols/va219.png')",
      background: "url('assets/symbols/va219.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag220"] = {
      fill: "url('assets/symbols/va220.png')",
      background: "url('assets/symbols/va220.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag221"] = {
      fill: "url('assets/symbols/va221.png')",
      background: "url('assets/symbols/va221.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag222"] = {
      fill: "url('assets/symbols/va222.png')",
      background: "url('assets/symbols/va222.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag223"] = {
      fill: "url('assets/symbols/va223.png')",
      background: "url('assets/symbols/va223.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag224"] = {
      fill: "url('assets/symbols/va224.png')",
      background: "url('assets/symbols/va224.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag225"] = {
      fill: "url('assets/symbols/va225.png')",
      background: "url('assets/symbols/va225.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag226"] = {
      fill: "url('assets/symbols/va226.png')",
      background: "url('assets/symbols/va226.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag227"] = {
      fill: "url('assets/symbols/va227.png')",
      background: "url('assets/symbols/va227.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag228"] = {
      fill: "url('assets/symbols/va228.png')",
      background: "url('assets/symbols/va228.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag229"] = {
      fill: "url('assets/symbols/va229.png')",
      background: "url('assets/symbols/va229.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag230"] = {
      fill: "url('assets/symbols/va230.png')",
      background: "url('assets/symbols/va230.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag300"] = {
      fill: "url('assets/symbols/va300.png')",
      background: "url('assets/symbols/va300.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag301"] = {
      fill: "url('assets/symbols/va301.png')",
      background: "url('assets/symbols/va301.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag302"] = {
      fill: "url('assets/symbols/va302.png')",
      background: "url('assets/symbols/va302.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag303"] = {
      fill: "url('assets/symbols/va303.png')",
      background: "url('assets/symbols/va303.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag304"] = {
      fill: "url('assets/symbols/va304.png')",
      background: "url('assets/symbols/va304.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag305"] = {
      fill: "url('assets/symbols/va305.png')",
      background: "url('assets/symbols/va305.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag306"] = {
      fill: "url('assets/symbols/va306.png')",
      background: "url('assets/symbols/va306.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag307"] = {
      fill: "url('assets/symbols/va307.png')",
      background: "url('assets/symbols/va307.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag308"] = {
      fill: "url('assets/symbols/va308.png')",
      background: "url('assets/symbols/va308.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag309"] = {
      fill: "url('assets/symbols/va309.png')",
      background: "url('assets/symbols/va309.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag310"] = {
      fill: "url('assets/symbols/va310.png')",
      background: "url('assets/symbols/va310.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag311"] = {
      fill: "url('assets/symbols/va311.png')",
      background: "url('assets/symbols/va311.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag312"] = {
      fill: "url('assets/symbols/va312.png')",
      background: "url('assets/symbols/va312.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag313"] = {
      fill: "url('assets/symbols/va313.png')",
      background: "url('assets/symbols/va313.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag314"] = {
      fill: "url('assets/symbols/va314.png')",
      background: "url('assets/symbols/va314.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag315"] = {
      fill: "url('assets/symbols/va315.png')",
      background: "url('assets/symbols/va315.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag316"] = {
      fill: "url('assets/symbols/va316.png')",
      background: "url('assets/symbols/va316.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag317"] = {
      fill: "url('assets/symbols/va317.png')",
      background: "url('assets/symbols/va317.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag318"] = {
      fill: "url('assets/symbols/va318.png')",
      background: "url('assets/symbols/va318.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag319"] = {
      fill: "url('assets/symbols/va319.png')",
      background: "url('assets/symbols/va319.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag320"] = {
      fill: "url('assets/symbols/va320.png')",
      background: "url('assets/symbols/va320.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag321"] = {
      fill: "url('assets/symbols/va321.png')",
      background: "url('assets/symbols/va321.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag322"] = {
      fill: "url('assets/symbols/va322.png')",
      background: "url('assets/symbols/va322.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag323"] = {
      fill: "url('assets/symbols/va323.png')",
      background: "url('assets/symbols/va323.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag324"] = {
      fill: "url('assets/symbols/va324.png')",
      background: "url('assets/symbols/va324.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag325"] = {
      fill: "url('assets/symbols/va325.png')",
      background: "url('assets/symbols/va325.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag326"] = {
      fill: "url('assets/symbols/va326.png')",
      background: "url('assets/symbols/va326.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag327"] = {
      fill: "url('assets/symbols/va327.png')",
      background: "url('assets/symbols/va327.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag328"] = {
      fill: "url('assets/symbols/va328.png')",
      background: "url('assets/symbols/va328.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag329"] = {
      fill: "url('assets/symbols/va329.png')",
      background: "url('assets/symbols/va329.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag330"] = {
      fill: "url('assets/symbols/va330.png')",
      background: "url('assets/symbols/va330.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag400"] = {
      fill: "url('assets/symbols/va400.png')",
      background: "url('assets/symbols/va400.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag401"] = {
      fill: "url('assets/symbols/va401.png')",
      background: "url('assets/symbols/va401.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag402"] = {
      fill: "url('assets/symbols/va402.png')",
      background: "url('assets/symbols/va402.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag403"] = {
      fill: "url('assets/symbols/va403.png')",
      background: "url('assets/symbols/va403.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag404"] = {
      fill: "url('assets/symbols/va404.png')",
      background: "url('assets/symbols/va404.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag405"] = {
      fill: "url('assets/symbols/va405.png')",
      background: "url('assets/symbols/va405.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag406"] = {
      fill: "url('assets/symbols/va406.png')",
      background: "url('assets/symbols/va406.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag407"] = {
      fill: "url('assets/symbols/va407.png')",
      background: "url('assets/symbols/va407.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag408"] = {
      fill: "url('assets/symbols/va408.png')",
      background: "url('assets/symbols/va408.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag409"] = {
      fill: "url('assets/symbols/va409.png')",
      background: "url('assets/symbols/va409.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag410"] = {
      fill: "url('assets/symbols/va410.png')",
      background: "url('assets/symbols/va410.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag411"] = {
      fill: "url('assets/symbols/va411.png')",
      background: "url('assets/symbols/va411.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag412"] = {
      fill: "url('assets/symbols/va412.png')",
      background: "url('assets/symbols/va412.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag413"] = {
      fill: "url('assets/symbols/va413.png')",
      background: "url('assets/symbols/va413.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag414"] = {
      fill: "url('assets/symbols/va414.png')",
      background: "url('assets/symbols/va414.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag415"] = {
      fill: "url('assets/symbols/va415.png')",
      background: "url('assets/symbols/va415.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag416"] = {
      fill: "url('assets/symbols/va416.png')",
      background: "url('assets/symbols/va416.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag417"] = {
      fill: "url('assets/symbols/va417.png')",
      background: "url('assets/symbols/va417.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag418"] = {
      fill: "url('assets/symbols/va418.png')",
      background: "url('assets/symbols/va418.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag419"] = {
      fill: "url('assets/symbols/va419.png')",
      background: "url('assets/symbols/va419.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag420"] = {
      fill: "url('assets/symbols/va420.png')",
      background: "url('assets/symbols/va420.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag421"] = {
      fill: "url('assets/symbols/va421.png')",
      background: "url('assets/symbols/va421.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag422"] = {
      fill: "url('assets/symbols/va422.png')",
      background: "url('assets/symbols/va422.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag423"] = {
      fill: "url('assets/symbols/va423.png')",
      background: "url('assets/symbols/va423.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag424"] = {
      fill: "url('assets/symbols/va424.png')",
      background: "url('assets/symbols/va424.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag425"] = {
      fill: "url('assets/symbols/va425.png')",
      background: "url('assets/symbols/va425.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag426"] = {
      fill: "url('assets/symbols/va426.png')",
      background: "url('assets/symbols/va426.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag427"] = {
      fill: "url('assets/symbols/va427.png')",
      background: "url('assets/symbols/va427.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag428"] = {
      fill: "url('assets/symbols/va428.png')",
      background: "url('assets/symbols/va428.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag429"] = {
      fill: "url('assets/symbols/va429.png')",
      background: "url('assets/symbols/va429.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag430"] = {
      fill: "url('assets/symbols/va430.png')",
      background: "url('assets/symbols/va430.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag500"] = {
      fill: "url('assets/symbols/va500.png')",
      background: "url('assets/symbols/va500.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vag501"] = {
      fill: "url('assets/symbols/va501.png')",
      background: "url('assets/symbols/va501.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag502"] = {
      fill: "url('assets/symbols/va502.png')",
      background: "url('assets/symbols/va502.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag503"] = {
      fill: "url('assets/symbols/va503.png')",
      background: "url('assets/symbols/va503.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag504"] = {
      fill: "url('assets/symbols/va504.png')",
      background: "url('assets/symbols/va504.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag505"] = {
      fill: "url('assets/symbols/va505.png')",
      background: "url('assets/symbols/va505.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag506"] = {
      fill: "url('assets/symbols/va506.png')",
      background: "url('assets/symbols/va506.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag507"] = {
      fill: "url('assets/symbols/va507.png')",
      background: "url('assets/symbols/va507.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag508"] = {
      fill: "url('assets/symbols/va508.png')",
      background: "url('assets/symbols/va508.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag509"] = {
      fill: "url('assets/symbols/va509.png')",
      background: "url('assets/symbols/va509.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag510"] = {
      fill: "url('assets/symbols/va510.png')",
      background: "url('assets/symbols/va510.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag511"] = {
      fill: "url('assets/symbols/va511.png')",
      background: "url('assets/symbols/va511.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag512"] = {
      fill: "url('assets/symbols/va512.png')",
      background: "url('assets/symbols/va512.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag513"] = {
      fill: "url('assets/symbols/va513.png')",
      background: "url('assets/symbols/va513.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag514"] = {
      fill: "url('assets/symbols/va514.png')",
      background: "url('assets/symbols/va514.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag515"] = {
      fill: "url('assets/symbols/va515.png')",
      background: "url('assets/symbols/va515.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag516"] = {
      fill: "url('assets/symbols/va516.png')",
      background: "url('assets/symbols/va516.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag517"] = {
      fill: "url('assets/symbols/va517.png')",
      background: "url('assets/symbols/va517.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag518"] = {
      fill: "url('assets/symbols/va518.png')",
      background: "url('assets/symbols/va518.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag519"] = {
      fill: "url('assets/symbols/va519.png')",
      background: "url('assets/symbols/va519.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag520"] = {
      fill: "url('assets/symbols/va520.png')",
      background: "url('assets/symbols/va520.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag521"] = {
      fill: "url('assets/symbols/va521.png')",
      background: "url('assets/symbols/va521.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag522"] = {
      fill: "url('assets/symbols/va522.png')",
      background: "url('assets/symbols/va522.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag523"] = {
      fill: "url('assets/symbols/va523.png')",
      background: "url('assets/symbols/va523.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag524"] = {
      fill: "url('assets/symbols/va524.png')",
      background: "url('assets/symbols/va524.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag525"] = {
      fill: "url('assets/symbols/va525.png')",
      background: "url('assets/symbols/va525.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag526"] = {
      fill: "url('assets/symbols/va526.png')",
      background: "url('assets/symbols/va526.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag527"] = {
      fill: "url('assets/symbols/va527.png')",
      background: "url('assets/symbols/va527.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag528"] = {
      fill: "url('assets/symbols/va528.png')",
      background: "url('assets/symbols/va528.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag529"] = {
      fill: "url('assets/symbols/va529.png')",
      background: "url('assets/symbols/va529.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vag530"] = {
      fill: "url('assets/symbols/va530.png')",
      background: "url('assets/symbols/va530.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "2px",
      "border-width": "2px",
      "border-style": "solid"
    };
    this.symboolcodes["vah000"] = {
      fill: "url('assets/symbols/va000.png')",
      background: "url('assets/symbols/va000.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah001"] = {
      fill: "url('assets/symbols/va001.png')",
      background: "url('assets/symbols/va001.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah002"] = {
      fill: "url('assets/symbols/va002.png')",
      background: "url('assets/symbols/va002.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah003"] = {
      fill: "url('assets/symbols/va003.png')",
      background: "url('assets/symbols/va003.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah004"] = {
      fill: "url('assets/symbols/va004.png')",
      background: "url('assets/symbols/va004.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah005"] = {
      fill: "url('assets/symbols/va005.png')",
      background: "url('assets/symbols/va005.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah006"] = {
      fill: "url('assets/symbols/va006.png')",
      background: "url('assets/symbols/va006.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah007"] = {
      fill: "url('assets/symbols/va007.png')",
      background: "url('assets/symbols/va007.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah008"] = {
      fill: "url('assets/symbols/va008.png')",
      background: "url('assets/symbols/va008.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah009"] = {
      fill: "url('assets/symbols/va009.png')",
      background: "url('assets/symbols/va009.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah010"] = {
      fill: "url('assets/symbols/va010.png')",
      background: "url('assets/symbols/va010.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah011"] = {
      fill: "url('assets/symbols/va011.png')",
      background: "url('assets/symbols/va011.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah012"] = {
      fill: "url('assets/symbols/va012.png')",
      background: "url('assets/symbols/va012.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah013"] = {
      fill: "url('assets/symbols/va013.png')",
      background: "url('assets/symbols/va013.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah014"] = {
      fill: "url('assets/symbols/va014.png')",
      background: "url('assets/symbols/va014.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah015"] = {
      fill: "url('assets/symbols/va015.png')",
      background: "url('assets/symbols/va015.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah016"] = {
      fill: "url('assets/symbols/va016.png')",
      background: "url('assets/symbols/va016.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah017"] = {
      fill: "url('assets/symbols/va017.png')",
      background: "url('assets/symbols/va017.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah018"] = {
      fill: "url('assets/symbols/va018.png')",
      background: "url('assets/symbols/va018.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah019"] = {
      fill: "url('assets/symbols/va019.png')",
      background: "url('assets/symbols/va019.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah020"] = {
      fill: "url('assets/symbols/va020.png')",
      background: "url('assets/symbols/va020.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah021"] = {
      fill: "url('assets/symbols/va021.png')",
      background: "url('assets/symbols/va021.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah022"] = {
      fill: "url('assets/symbols/va022.png')",
      background: "url('assets/symbols/va022.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah023"] = {
      fill: "url('assets/symbols/va023.png')",
      background: "url('assets/symbols/va023.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah024"] = {
      fill: "url('assets/symbols/va024.png')",
      background: "url('assets/symbols/va024.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah025"] = {
      fill: "url('assets/symbols/va025.png')",
      background: "url('assets/symbols/va025.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah026"] = {
      fill: "url('assets/symbols/va026.png')",
      background: "url('assets/symbols/va026.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah027"] = {
      fill: "url('assets/symbols/va027.png')",
      background: "url('assets/symbols/va027.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah028"] = {
      fill: "url('assets/symbols/va028.png')",
      background: "url('assets/symbols/va028.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah029"] = {
      fill: "url('assets/symbols/va029.png')",
      background: "url('assets/symbols/va029.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah030"] = {
      fill: "url('assets/symbols/va030.png')",
      background: "url('assets/symbols/va030.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah100"] = {
      fill: "url('assets/symbols/va100.png')",
      background: "url('assets/symbols/va100.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah101"] = {
      fill: "url('assets/symbols/va101.png')",
      background: "url('assets/symbols/va101.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah102"] = {
      fill: "url('assets/symbols/va102.png')",
      background: "url('assets/symbols/va102.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah103"] = {
      fill: "url('assets/symbols/va103.png')",
      background: "url('assets/symbols/va103.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah104"] = {
      fill: "url('assets/symbols/va104.png')",
      background: "url('assets/symbols/va104.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah105"] = {
      fill: "url('assets/symbols/va105.png')",
      background: "url('assets/symbols/va105.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah106"] = {
      fill: "url('assets/symbols/va106.png')",
      background: "url('assets/symbols/va106.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah107"] = {
      fill: "url('assets/symbols/va107.png')",
      background: "url('assets/symbols/va107.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah108"] = {
      fill: "url('assets/symbols/va108.png')",
      background: "url('assets/symbols/va108.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah109"] = {
      fill: "url('assets/symbols/va109.png')",
      background: "url('assets/symbols/va109.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah110"] = {
      fill: "url('assets/symbols/va110.png')",
      background: "url('assets/symbols/va110.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah111"] = {
      fill: "url('assets/symbols/va111.png')",
      background: "url('assets/symbols/va111.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah112"] = {
      fill: "url('assets/symbols/va112.png')",
      background: "url('assets/symbols/va112.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah113"] = {
      fill: "url('assets/symbols/va113.png')",
      background: "url('assets/symbols/va113.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah114"] = {
      fill: "url('assets/symbols/va114.png')",
      background: "url('assets/symbols/va114.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah115"] = {
      fill: "url('assets/symbols/va115.png')",
      background: "url('assets/symbols/va115.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah116"] = {
      fill: "url('assets/symbols/va116.png')",
      background: "url('assets/symbols/va116.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah117"] = {
      fill: "url('assets/symbols/va117.png')",
      background: "url('assets/symbols/va117.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah118"] = {
      fill: "url('assets/symbols/va118.png')",
      background: "url('assets/symbols/va118.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah119"] = {
      fill: "url('assets/symbols/va119.png')",
      background: "url('assets/symbols/va119.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah120"] = {
      fill: "url('assets/symbols/va120.png')",
      background: "url('assets/symbols/va120.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah121"] = {
      fill: "url('assets/symbols/va121.png')",
      background: "url('assets/symbols/va121.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah122"] = {
      fill: "url('assets/symbols/va122.png')",
      background: "url('assets/symbols/va122.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah123"] = {
      fill: "url('assets/symbols/va123.png')",
      background: "url('assets/symbols/va123.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah124"] = {
      fill: "url('assets/symbols/va124.png')",
      background: "url('assets/symbols/va124.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah125"] = {
      fill: "url('assets/symbols/va125.png')",
      background: "url('assets/symbols/va125.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah126"] = {
      fill: "url('assets/symbols/va126.png')",
      background: "url('assets/symbols/va126.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah127"] = {
      fill: "url('assets/symbols/va127.png')",
      background: "url('assets/symbols/va127.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah128"] = {
      fill: "url('assets/symbols/va128.png')",
      background: "url('assets/symbols/va128.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah129"] = {
      fill: "url('assets/symbols/va129.png')",
      background: "url('assets/symbols/va129.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah130"] = {
      fill: "url('assets/symbols/va130.png')",
      background: "url('assets/symbols/va130.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah200"] = {
      fill: "url('assets/symbols/va200.png')",
      background: "url('assets/symbols/va200.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah201"] = {
      fill: "url('assets/symbols/va201.png')",
      background: "url('assets/symbols/va201.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah202"] = {
      fill: "url('assets/symbols/va202.png')",
      background: "url('assets/symbols/va202.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah203"] = {
      fill: "url('assets/symbols/va203.png')",
      background: "url('assets/symbols/va203.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah204"] = {
      fill: "url('assets/symbols/va204.png')",
      background: "url('assets/symbols/va204.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah205"] = {
      fill: "url('assets/symbols/va205.png')",
      background: "url('assets/symbols/va205.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah206"] = {
      fill: "url('assets/symbols/va206.png')",
      background: "url('assets/symbols/va206.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah207"] = {
      fill: "url('assets/symbols/va207.png')",
      background: "url('assets/symbols/va207.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah208"] = {
      fill: "url('assets/symbols/va208.png')",
      background: "url('assets/symbols/va208.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah209"] = {
      fill: "url('assets/symbols/va209.png')",
      background: "url('assets/symbols/va209.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah210"] = {
      fill: "url('assets/symbols/va210.png')",
      background: "url('assets/symbols/va210.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah211"] = {
      fill: "url('assets/symbols/va211.png')",
      background: "url('assets/symbols/va211.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah212"] = {
      fill: "url('assets/symbols/va212.png')",
      background: "url('assets/symbols/va212.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah213"] = {
      fill: "url('assets/symbols/va213.png')",
      background: "url('assets/symbols/va213.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah214"] = {
      fill: "url('assets/symbols/va214.png')",
      background: "url('assets/symbols/va214.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah215"] = {
      fill: "url('assets/symbols/va215.png')",
      background: "url('assets/symbols/va215.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah216"] = {
      fill: "url('assets/symbols/va216.png')",
      background: "url('assets/symbols/va216.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah217"] = {
      fill: "url('assets/symbols/va217.png')",
      background: "url('assets/symbols/va217.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah218"] = {
      fill: "url('assets/symbols/va218.png')",
      background: "url('assets/symbols/va218.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah219"] = {
      fill: "url('assets/symbols/va219.png')",
      background: "url('assets/symbols/va219.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah220"] = {
      fill: "url('assets/symbols/va220.png')",
      background: "url('assets/symbols/va220.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah221"] = {
      fill: "url('assets/symbols/va221.png')",
      background: "url('assets/symbols/va221.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah222"] = {
      fill: "url('assets/symbols/va222.png')",
      background: "url('assets/symbols/va222.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah223"] = {
      fill: "url('assets/symbols/va223.png')",
      background: "url('assets/symbols/va223.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah224"] = {
      fill: "url('assets/symbols/va224.png')",
      background: "url('assets/symbols/va224.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah225"] = {
      fill: "url('assets/symbols/va225.png')",
      background: "url('assets/symbols/va225.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah226"] = {
      fill: "url('assets/symbols/va226.png')",
      background: "url('assets/symbols/va226.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah227"] = {
      fill: "url('assets/symbols/va227.png')",
      background: "url('assets/symbols/va227.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah228"] = {
      fill: "url('assets/symbols/va228.png')",
      background: "url('assets/symbols/va228.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah229"] = {
      fill: "url('assets/symbols/va229.png')",
      background: "url('assets/symbols/va229.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah230"] = {
      fill: "url('assets/symbols/va230.png')",
      background: "url('assets/symbols/va230.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah300"] = {
      fill: "url('assets/symbols/va300.png')",
      background: "url('assets/symbols/va300.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah301"] = {
      fill: "url('assets/symbols/va301.png')",
      background: "url('assets/symbols/va301.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah302"] = {
      fill: "url('assets/symbols/va302.png')",
      background: "url('assets/symbols/va302.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah303"] = {
      fill: "url('assets/symbols/va303.png')",
      background: "url('assets/symbols/va303.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah304"] = {
      fill: "url('assets/symbols/va304.png')",
      background: "url('assets/symbols/va304.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah305"] = {
      fill: "url('assets/symbols/va305.png')",
      background: "url('assets/symbols/va305.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah306"] = {
      fill: "url('assets/symbols/va306.png')",
      background: "url('assets/symbols/va306.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah307"] = {
      fill: "url('assets/symbols/va307.png')",
      background: "url('assets/symbols/va307.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah308"] = {
      fill: "url('assets/symbols/va308.png')",
      background: "url('assets/symbols/va308.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah309"] = {
      fill: "url('assets/symbols/va309.png')",
      background: "url('assets/symbols/va309.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah310"] = {
      fill: "url('assets/symbols/va310.png')",
      background: "url('assets/symbols/va310.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah311"] = {
      fill: "url('assets/symbols/va311.png')",
      background: "url('assets/symbols/va311.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah312"] = {
      fill: "url('assets/symbols/va312.png')",
      background: "url('assets/symbols/va312.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah313"] = {
      fill: "url('assets/symbols/va313.png')",
      background: "url('assets/symbols/va313.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah314"] = {
      fill: "url('assets/symbols/va314.png')",
      background: "url('assets/symbols/va314.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah315"] = {
      fill: "url('assets/symbols/va315.png')",
      background: "url('assets/symbols/va315.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah316"] = {
      fill: "url('assets/symbols/va316.png')",
      background: "url('assets/symbols/va316.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah317"] = {
      fill: "url('assets/symbols/va317.png')",
      background: "url('assets/symbols/va317.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah318"] = {
      fill: "url('assets/symbols/va318.png')",
      background: "url('assets/symbols/va318.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah319"] = {
      fill: "url('assets/symbols/va319.png')",
      background: "url('assets/symbols/va319.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah320"] = {
      fill: "url('assets/symbols/va320.png')",
      background: "url('assets/symbols/va320.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah321"] = {
      fill: "url('assets/symbols/va321.png')",
      background: "url('assets/symbols/va321.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah322"] = {
      fill: "url('assets/symbols/va322.png')",
      background: "url('assets/symbols/va322.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah323"] = {
      fill: "url('assets/symbols/va323.png')",
      background: "url('assets/symbols/va323.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah324"] = {
      fill: "url('assets/symbols/va324.png')",
      background: "url('assets/symbols/va324.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah325"] = {
      fill: "url('assets/symbols/va325.png')",
      background: "url('assets/symbols/va325.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah326"] = {
      fill: "url('assets/symbols/va326.png')",
      background: "url('assets/symbols/va326.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah327"] = {
      fill: "url('assets/symbols/va327.png')",
      background: "url('assets/symbols/va327.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah328"] = {
      fill: "url('assets/symbols/va328.png')",
      background: "url('assets/symbols/va328.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah329"] = {
      fill: "url('assets/symbols/va329.png')",
      background: "url('assets/symbols/va329.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah330"] = {
      fill: "url('assets/symbols/va330.png')",
      background: "url('assets/symbols/va330.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah400"] = {
      fill: "url('assets/symbols/va400.png')",
      background: "url('assets/symbols/va400.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah401"] = {
      fill: "url('assets/symbols/va401.png')",
      background: "url('assets/symbols/va401.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah402"] = {
      fill: "url('assets/symbols/va402.png')",
      background: "url('assets/symbols/va402.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah403"] = {
      fill: "url('assets/symbols/va403.png')",
      background: "url('assets/symbols/va403.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah404"] = {
      fill: "url('assets/symbols/va404.png')",
      background: "url('assets/symbols/va404.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah405"] = {
      fill: "url('assets/symbols/va405.png')",
      background: "url('assets/symbols/va405.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah406"] = {
      fill: "url('assets/symbols/va406.png')",
      background: "url('assets/symbols/va406.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah407"] = {
      fill: "url('assets/symbols/va407.png')",
      background: "url('assets/symbols/va407.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah408"] = {
      fill: "url('assets/symbols/va408.png')",
      background: "url('assets/symbols/va408.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah409"] = {
      fill: "url('assets/symbols/va409.png')",
      background: "url('assets/symbols/va409.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah410"] = {
      fill: "url('assets/symbols/va410.png')",
      background: "url('assets/symbols/va410.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah411"] = {
      fill: "url('assets/symbols/va411.png')",
      background: "url('assets/symbols/va411.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah412"] = {
      fill: "url('assets/symbols/va412.png')",
      background: "url('assets/symbols/va412.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah413"] = {
      fill: "url('assets/symbols/va413.png')",
      background: "url('assets/symbols/va413.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah414"] = {
      fill: "url('assets/symbols/va414.png')",
      background: "url('assets/symbols/va414.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah415"] = {
      fill: "url('assets/symbols/va415.png')",
      background: "url('assets/symbols/va415.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah416"] = {
      fill: "url('assets/symbols/va416.png')",
      background: "url('assets/symbols/va416.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah417"] = {
      fill: "url('assets/symbols/va417.png')",
      background: "url('assets/symbols/va417.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah418"] = {
      fill: "url('assets/symbols/va418.png')",
      background: "url('assets/symbols/va418.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah419"] = {
      fill: "url('assets/symbols/va419.png')",
      background: "url('assets/symbols/va419.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah420"] = {
      fill: "url('assets/symbols/va420.png')",
      background: "url('assets/symbols/va420.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah421"] = {
      fill: "url('assets/symbols/va421.png')",
      background: "url('assets/symbols/va421.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah422"] = {
      fill: "url('assets/symbols/va422.png')",
      background: "url('assets/symbols/va422.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah423"] = {
      fill: "url('assets/symbols/va423.png')",
      background: "url('assets/symbols/va423.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah424"] = {
      fill: "url('assets/symbols/va424.png')",
      background: "url('assets/symbols/va424.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah425"] = {
      fill: "url('assets/symbols/va425.png')",
      background: "url('assets/symbols/va425.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah426"] = {
      fill: "url('assets/symbols/va426.png')",
      background: "url('assets/symbols/va426.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah427"] = {
      fill: "url('assets/symbols/va427.png')",
      background: "url('assets/symbols/va427.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah428"] = {
      fill: "url('assets/symbols/va428.png')",
      background: "url('assets/symbols/va428.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah429"] = {
      fill: "url('assets/symbols/va429.png')",
      background: "url('assets/symbols/va429.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah430"] = {
      fill: "url('assets/symbols/va430.png')",
      background: "url('assets/symbols/va430.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah500"] = {
      fill: "url('assets/symbols/va500.png')",
      background: "url('assets/symbols/va500.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah501"] = {
      fill: "url('assets/symbols/va501.png')",
      background: "url('assets/symbols/va501.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah502"] = {
      fill: "url('assets/symbols/va502.png')",
      background: "url('assets/symbols/va502.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah503"] = {
      fill: "url('assets/symbols/va503.png')",
      background: "url('assets/symbols/va503.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah504"] = {
      fill: "url('assets/symbols/va504.png')",
      background: "url('assets/symbols/va504.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah505"] = {
      fill: "url('assets/symbols/va505.png')",
      background: "url('assets/symbols/va505.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah506"] = {
      fill: "url('assets/symbols/va506.png')",
      background: "url('assets/symbols/va506.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah507"] = {
      fill: "url('assets/symbols/va507.png')",
      background: "url('assets/symbols/va507.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah508"] = {
      fill: "url('assets/symbols/va508.png')",
      background: "url('assets/symbols/va508.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah509"] = {
      fill: "url('assets/symbols/va509.png')",
      background: "url('assets/symbols/va509.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah510"] = {
      fill: "url('assets/symbols/va510.png')",
      background: "url('assets/symbols/va510.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah511"] = {
      fill: "url('assets/symbols/va511.png')",
      background: "url('assets/symbols/va511.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah512"] = {
      fill: "url('assets/symbols/va512.png')",
      background: "url('assets/symbols/va512.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah513"] = {
      fill: "url('assets/symbols/va513.png')",
      background: "url('assets/symbols/va513.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah514"] = {
      fill: "url('assets/symbols/va514.png')",
      background: "url('assets/symbols/va514.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah515"] = {
      fill: "url('assets/symbols/va515.png')",
      background: "url('assets/symbols/va515.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah516"] = {
      fill: "url('assets/symbols/va516.png')",
      background: "url('assets/symbols/va516.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah517"] = {
      fill: "url('assets/symbols/va517.png')",
      background: "url('assets/symbols/va517.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah518"] = {
      fill: "url('assets/symbols/va518.png')",
      background: "url('assets/symbols/va518.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah519"] = {
      fill: "url('assets/symbols/va519.png')",
      background: "url('assets/symbols/va519.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah520"] = {
      fill: "url('assets/symbols/va520.png')",
      background: "url('assets/symbols/va520.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah521"] = {
      fill: "url('assets/symbols/va521.png')",
      background: "url('assets/symbols/va521.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah522"] = {
      fill: "url('assets/symbols/va522.png')",
      background: "url('assets/symbols/va522.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah523"] = {
      fill: "url('assets/symbols/va523.png')",
      background: "url('assets/symbols/va523.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah524"] = {
      fill: "url('assets/symbols/va524.png')",
      background: "url('assets/symbols/va524.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah525"] = {
      fill: "url('assets/symbols/va525.png')",
      background: "url('assets/symbols/va525.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah526"] = {
      fill: "url('assets/symbols/va526.png')",
      background: "url('assets/symbols/va526.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah527"] = {
      fill: "url('assets/symbols/va527.png')",
      background: "url('assets/symbols/va527.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah528"] = {
      fill: "url('assets/symbols/va528.png')",
      background: "url('assets/symbols/va528.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah529"] = {
      fill: "url('assets/symbols/va529.png')",
      background: "url('assets/symbols/va529.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vah530"] = {
      fill: "url('assets/symbols/va530.png')",
      background: "url('assets/symbols/va530.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "3px",
      "border-width": "3px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["vaz000"] = {
      fill: "url('assets/symbols/va000.png')",
      background: "url('assets/symbols/va000.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz001"] = {
      fill: "url('assets/symbols/va001.png')",
      background: "url('assets/symbols/va001.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz002"] = {
      fill: "url('assets/symbols/va002.png')",
      background: "url('assets/symbols/va002.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz003"] = {
      fill: "url('assets/symbols/va003.png')",
      background: "url('assets/symbols/va003.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz004"] = {
      fill: "url('assets/symbols/va004.png')",
      background: "url('assets/symbols/va004.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz005"] = {
      fill: "url('assets/symbols/va005.png')",
      background: "url('assets/symbols/va005.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz006"] = {
      fill: "url('assets/symbols/va006.png')",
      background: "url('assets/symbols/va006.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz007"] = {
      fill: "url('assets/symbols/va007.png')",
      background: "url('assets/symbols/va007.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz008"] = {
      fill: "url('assets/symbols/va008.png')",
      background: "url('assets/symbols/va008.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz009"] = {
      fill: "url('assets/symbols/va009.png')",
      background: "url('assets/symbols/va009.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz010"] = {
      fill: "url('assets/symbols/va010.png')",
      background: "url('assets/symbols/va010.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz011"] = {
      fill: "url('assets/symbols/va011.png')",
      background: "url('assets/symbols/va011.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz012"] = {
      fill: "url('assets/symbols/va012.png')",
      background: "url('assets/symbols/va012.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz013"] = {
      fill: "url('assets/symbols/va013.png')",
      background: "url('assets/symbols/va013.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz014"] = {
      fill: "url('assets/symbols/va014.png')",
      background: "url('assets/symbols/va014.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz015"] = {
      fill: "url('assets/symbols/va015.png')",
      background: "url('assets/symbols/va015.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz016"] = {
      fill: "url('assets/symbols/va016.png')",
      background: "url('assets/symbols/va016.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz017"] = {
      fill: "url('assets/symbols/va017.png')",
      background: "url('assets/symbols/va017.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz018"] = {
      fill: "url('assets/symbols/va018.png')",
      background: "url('assets/symbols/va018.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz019"] = {
      fill: "url('assets/symbols/va019.png')",
      background: "url('assets/symbols/va019.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz020"] = {
      fill: "url('assets/symbols/va020.png')",
      background: "url('assets/symbols/va020.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz021"] = {
      fill: "url('assets/symbols/va021.png')",
      background: "url('assets/symbols/va021.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz022"] = {
      fill: "url('assets/symbols/va022.png')",
      background: "url('assets/symbols/va022.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz023"] = {
      fill: "url('assets/symbols/va023.png')",
      background: "url('assets/symbols/va023.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz024"] = {
      fill: "url('assets/symbols/va024.png')",
      background: "url('assets/symbols/va024.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz025"] = {
      fill: "url('assets/symbols/va025.png')",
      background: "url('assets/symbols/va025.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz026"] = {
      fill: "url('assets/symbols/va026.png')",
      background: "url('assets/symbols/va026.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz027"] = {
      fill: "url('assets/symbols/va027.png')",
      background: "url('assets/symbols/va027.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz028"] = {
      fill: "url('assets/symbols/va028.png')",
      background: "url('assets/symbols/va028.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz029"] = {
      fill: "url('assets/symbols/va029.png')",
      background: "url('assets/symbols/va029.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz030"] = {
      fill: "url('assets/symbols/va030.png')",
      background: "url('assets/symbols/va030.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz100"] = {
      fill: "url('assets/symbols/va100.png')",
      background: "url('assets/symbols/va100.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz101"] = {
      fill: "url('assets/symbols/va101.png')",
      background: "url('assets/symbols/va101.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz102"] = {
      fill: "url('assets/symbols/va102.png')",
      background: "url('assets/symbols/va102.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz103"] = {
      fill: "url('assets/symbols/va103.png')",
      background: "url('assets/symbols/va103.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz104"] = {
      fill: "url('assets/symbols/va104.png')",
      background: "url('assets/symbols/va104.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz105"] = {
      fill: "url('assets/symbols/va105.png')",
      background: "url('assets/symbols/va105.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz106"] = {
      fill: "url('assets/symbols/va106.png')",
      background: "url('assets/symbols/va106.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz107"] = {
      fill: "url('assets/symbols/va107.png')",
      background: "url('assets/symbols/va107.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz108"] = {
      fill: "url('assets/symbols/va108.png')",
      background: "url('assets/symbols/va108.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz109"] = {
      fill: "url('assets/symbols/va109.png')",
      background: "url('assets/symbols/va109.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz110"] = {
      fill: "url('assets/symbols/va110.png')",
      background: "url('assets/symbols/va110.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz111"] = {
      fill: "url('assets/symbols/va111.png')",
      background: "url('assets/symbols/va111.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz112"] = {
      fill: "url('assets/symbols/va112.png')",
      background: "url('assets/symbols/va112.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz113"] = {
      fill: "url('assets/symbols/va113.png')",
      background: "url('assets/symbols/va113.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz114"] = {
      fill: "url('assets/symbols/va114.png')",
      background: "url('assets/symbols/va114.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz115"] = {
      fill: "url('assets/symbols/va115.png')",
      background: "url('assets/symbols/va115.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz116"] = {
      fill: "url('assets/symbols/va116.png')",
      background: "url('assets/symbols/va116.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz117"] = {
      fill: "url('assets/symbols/va117.png')",
      background: "url('assets/symbols/va117.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz118"] = {
      fill: "url('assets/symbols/va118.png')",
      background: "url('assets/symbols/va118.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz119"] = {
      fill: "url('assets/symbols/va119.png')",
      background: "url('assets/symbols/va119.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz120"] = {
      fill: "url('assets/symbols/va120.png')",
      background: "url('assets/symbols/va120.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz121"] = {
      fill: "url('assets/symbols/va121.png')",
      background: "url('assets/symbols/va121.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz122"] = {
      fill: "url('assets/symbols/va122.png')",
      background: "url('assets/symbols/va122.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz123"] = {
      fill: "url('assets/symbols/va123.png')",
      background: "url('assets/symbols/va123.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz124"] = {
      fill: "url('assets/symbols/va124.png')",
      background: "url('assets/symbols/va124.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz125"] = {
      fill: "url('assets/symbols/va125.png')",
      background: "url('assets/symbols/va125.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz126"] = {
      fill: "url('assets/symbols/va126.png')",
      background: "url('assets/symbols/va126.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz127"] = {
      fill: "url('assets/symbols/va127.png')",
      background: "url('assets/symbols/va127.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz128"] = {
      fill: "url('assets/symbols/va128.png')",
      background: "url('assets/symbols/va128.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz129"] = {
      fill: "url('assets/symbols/va129.png')",
      background: "url('assets/symbols/va129.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz130"] = {
      fill: "url('assets/symbols/va130.png')",
      background: "url('assets/symbols/va130.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz200"] = {
      fill: "url('assets/symbols/va200.png')",
      background: "url('assets/symbols/va200.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz201"] = {
      fill: "url('assets/symbols/va201.png')",
      background: "url('assets/symbols/va201.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz202"] = {
      fill: "url('assets/symbols/va202.png')",
      background: "url('assets/symbols/va202.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz203"] = {
      fill: "url('assets/symbols/va203.png')",
      background: "url('assets/symbols/va203.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz204"] = {
      fill: "url('assets/symbols/va204.png')",
      background: "url('assets/symbols/va204.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz205"] = {
      fill: "url('assets/symbols/va205.png')",
      background: "url('assets/symbols/va205.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz206"] = {
      fill: "url('assets/symbols/va206.png')",
      background: "url('assets/symbols/va206.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz207"] = {
      fill: "url('assets/symbols/va207.png')",
      background: "url('assets/symbols/va207.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz208"] = {
      fill: "url('assets/symbols/va208.png')",
      background: "url('assets/symbols/va208.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz209"] = {
      fill: "url('assets/symbols/va209.png')",
      background: "url('assets/symbols/va209.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz210"] = {
      fill: "url('assets/symbols/va210.png')",
      background: "url('assets/symbols/va210.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz211"] = {
      fill: "url('assets/symbols/va211.png')",
      background: "url('assets/symbols/va211.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz212"] = {
      fill: "url('assets/symbols/va212.png')",
      background: "url('assets/symbols/va212.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz213"] = {
      fill: "url('assets/symbols/va213.png')",
      background: "url('assets/symbols/va213.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz214"] = {
      fill: "url('assets/symbols/va214.png')",
      background: "url('assets/symbols/va214.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz215"] = {
      fill: "url('assets/symbols/va215.png')",
      background: "url('assets/symbols/va215.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz216"] = {
      fill: "url('assets/symbols/va216.png')",
      background: "url('assets/symbols/va216.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz217"] = {
      fill: "url('assets/symbols/va217.png')",
      background: "url('assets/symbols/va217.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz218"] = {
      fill: "url('assets/symbols/va218.png')",
      background: "url('assets/symbols/va218.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz219"] = {
      fill: "url('assets/symbols/va219.png')",
      background: "url('assets/symbols/va219.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz220"] = {
      fill: "url('assets/symbols/va220.png')",
      background: "url('assets/symbols/va220.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz221"] = {
      fill: "url('assets/symbols/va221.png')",
      background: "url('assets/symbols/va221.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz222"] = {
      fill: "url('assets/symbols/va222.png')",
      background: "url('assets/symbols/va222.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz223"] = {
      fill: "url('assets/symbols/va223.png')",
      background: "url('assets/symbols/va223.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz224"] = {
      fill: "url('assets/symbols/va224.png')",
      background: "url('assets/symbols/va224.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz225"] = {
      fill: "url('assets/symbols/va225.png')",
      background: "url('assets/symbols/va225.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz226"] = {
      fill: "url('assets/symbols/va226.png')",
      background: "url('assets/symbols/va226.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz227"] = {
      fill: "url('assets/symbols/va227.png')",
      background: "url('assets/symbols/va227.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz228"] = {
      fill: "url('assets/symbols/va228.png')",
      background: "url('assets/symbols/va228.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz229"] = {
      fill: "url('assets/symbols/va229.png')",
      background: "url('assets/symbols/va229.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz230"] = {
      fill: "url('assets/symbols/va230.png')",
      background: "url('assets/symbols/va230.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz300"] = {
      fill: "url('assets/symbols/va300.png')",
      background: "url('assets/symbols/va300.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz301"] = {
      fill: "url('assets/symbols/va301.png')",
      background: "url('assets/symbols/va301.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz302"] = {
      fill: "url('assets/symbols/va302.png')",
      background: "url('assets/symbols/va302.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz303"] = {
      fill: "url('assets/symbols/va303.png')",
      background: "url('assets/symbols/va303.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz304"] = {
      fill: "url('assets/symbols/va304.png')",
      background: "url('assets/symbols/va304.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz305"] = {
      fill: "url('assets/symbols/va305.png')",
      background: "url('assets/symbols/va305.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz306"] = {
      fill: "url('assets/symbols/va306.png')",
      background: "url('assets/symbols/va306.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz307"] = {
      fill: "url('assets/symbols/va307.png')",
      background: "url('assets/symbols/va307.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz308"] = {
      fill: "url('assets/symbols/va308.png')",
      background: "url('assets/symbols/va308.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz309"] = {
      fill: "url('assets/symbols/va309.png')",
      background: "url('assets/symbols/va309.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz310"] = {
      fill: "url('assets/symbols/va310.png')",
      background: "url('assets/symbols/va310.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz311"] = {
      fill: "url('assets/symbols/va311.png')",
      background: "url('assets/symbols/va311.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz312"] = {
      fill: "url('assets/symbols/va312.png')",
      background: "url('assets/symbols/va312.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz313"] = {
      fill: "url('assets/symbols/va313.png')",
      background: "url('assets/symbols/va313.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz314"] = {
      fill: "url('assets/symbols/va314.png')",
      background: "url('assets/symbols/va314.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz315"] = {
      fill: "url('assets/symbols/va315.png')",
      background: "url('assets/symbols/va315.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz316"] = {
      fill: "url('assets/symbols/va316.png')",
      background: "url('assets/symbols/va316.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz317"] = {
      fill: "url('assets/symbols/va317.png')",
      background: "url('assets/symbols/va317.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz318"] = {
      fill: "url('assets/symbols/va318.png')",
      background: "url('assets/symbols/va318.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz319"] = {
      fill: "url('assets/symbols/va319.png')",
      background: "url('assets/symbols/va319.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz320"] = {
      fill: "url('assets/symbols/va320.png')",
      background: "url('assets/symbols/va320.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz321"] = {
      fill: "url('assets/symbols/va321.png')",
      background: "url('assets/symbols/va321.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz322"] = {
      fill: "url('assets/symbols/va322.png')",
      background: "url('assets/symbols/va322.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz323"] = {
      fill: "url('assets/symbols/va323.png')",
      background: "url('assets/symbols/va323.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz324"] = {
      fill: "url('assets/symbols/va324.png')",
      background: "url('assets/symbols/va324.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz325"] = {
      fill: "url('assets/symbols/va325.png')",
      background: "url('assets/symbols/va325.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz326"] = {
      fill: "url('assets/symbols/va326.png')",
      background: "url('assets/symbols/va326.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz327"] = {
      fill: "url('assets/symbols/va327.png')",
      background: "url('assets/symbols/va327.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz328"] = {
      fill: "url('assets/symbols/va328.png')",
      background: "url('assets/symbols/va328.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz329"] = {
      fill: "url('assets/symbols/va329.png')",
      background: "url('assets/symbols/va329.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz330"] = {
      fill: "url('assets/symbols/va330.png')",
      background: "url('assets/symbols/va330.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz400"] = {
      fill: "url('assets/symbols/va400.png')",
      background: "url('assets/symbols/va400.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz401"] = {
      fill: "url('assets/symbols/va401.png')",
      background: "url('assets/symbols/va401.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz402"] = {
      fill: "url('assets/symbols/va402.png')",
      background: "url('assets/symbols/va402.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz403"] = {
      fill: "url('assets/symbols/va403.png')",
      background: "url('assets/symbols/va403.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz404"] = {
      fill: "url('assets/symbols/va404.png')",
      background: "url('assets/symbols/va404.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz405"] = {
      fill: "url('assets/symbols/va405.png')",
      background: "url('assets/symbols/va405.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz406"] = {
      fill: "url('assets/symbols/va406.png')",
      background: "url('assets/symbols/va406.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz407"] = {
      fill: "url('assets/symbols/va407.png')",
      background: "url('assets/symbols/va407.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz408"] = {
      fill: "url('assets/symbols/va408.png')",
      background: "url('assets/symbols/va408.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz409"] = {
      fill: "url('assets/symbols/va409.png')",
      background: "url('assets/symbols/va409.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz410"] = {
      fill: "url('assets/symbols/va410.png')",
      background: "url('assets/symbols/va410.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz411"] = {
      fill: "url('assets/symbols/va411.png')",
      background: "url('assets/symbols/va411.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz412"] = {
      fill: "url('assets/symbols/va412.png')",
      background: "url('assets/symbols/va412.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz413"] = {
      fill: "url('assets/symbols/va413.png')",
      background: "url('assets/symbols/va413.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz414"] = {
      fill: "url('assets/symbols/va414.png')",
      background: "url('assets/symbols/va414.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz415"] = {
      fill: "url('assets/symbols/va415.png')",
      background: "url('assets/symbols/va415.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz416"] = {
      fill: "url('assets/symbols/va416.png')",
      background: "url('assets/symbols/va416.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz417"] = {
      fill: "url('assets/symbols/va417.png')",
      background: "url('assets/symbols/va417.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz418"] = {
      fill: "url('assets/symbols/va418.png')",
      background: "url('assets/symbols/va418.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz419"] = {
      fill: "url('assets/symbols/va419.png')",
      background: "url('assets/symbols/va419.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz420"] = {
      fill: "url('assets/symbols/va420.png')",
      background: "url('assets/symbols/va420.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz421"] = {
      fill: "url('assets/symbols/va421.png')",
      background: "url('assets/symbols/va421.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz422"] = {
      fill: "url('assets/symbols/va422.png')",
      background: "url('assets/symbols/va422.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz423"] = {
      fill: "url('assets/symbols/va423.png')",
      background: "url('assets/symbols/va423.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz424"] = {
      fill: "url('assets/symbols/va424.png')",
      background: "url('assets/symbols/va424.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz425"] = {
      fill: "url('assets/symbols/va425.png')",
      background: "url('assets/symbols/va425.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz426"] = {
      fill: "url('assets/symbols/va426.png')",
      background: "url('assets/symbols/va426.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz427"] = {
      fill: "url('assets/symbols/va427.png')",
      background: "url('assets/symbols/va427.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz428"] = {
      fill: "url('assets/symbols/va428.png')",
      background: "url('assets/symbols/va428.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz429"] = {
      fill: "url('assets/symbols/va429.png')",
      background: "url('assets/symbols/va429.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz430"] = {
      fill: "url('assets/symbols/va430.png')",
      background: "url('assets/symbols/va430.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz500"] = {
      fill: "url('assets/symbols/va500.png')",
      background: "url('assets/symbols/va500.png')",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz501"] = {
      fill: "url('assets/symbols/va501.png')",
      background: "url('assets/symbols/va501.png')",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz502"] = {
      fill: "url('assets/symbols/va502.png')",
      background: "url('assets/symbols/va502.png')",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz503"] = {
      fill: "url('assets/symbols/va503.png')",
      background: "url('assets/symbols/va503.png')",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz504"] = {
      fill: "url('assets/symbols/va504.png')",
      background: "url('assets/symbols/va504.png')",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz505"] = {
      fill: "url('assets/symbols/va505.png')",
      background: "url('assets/symbols/va505.png')",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz506"] = {
      fill: "url('assets/symbols/va506.png')",
      background: "url('assets/symbols/va506.png')",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz507"] = {
      fill: "url('assets/symbols/va507.png')",
      background: "url('assets/symbols/va507.png')",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz508"] = {
      fill: "url('assets/symbols/va508.png')",
      background: "url('assets/symbols/va508.png')",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz509"] = {
      fill: "url('assets/symbols/va509.png')",
      background: "url('assets/symbols/va509.png')",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz510"] = {
      fill: "url('assets/symbols/va510.png')",
      background: "url('assets/symbols/va510.png')",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz511"] = {
      fill: "url('assets/symbols/va511.png')",
      background: "url('assets/symbols/va511.png')",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz512"] = {
      fill: "url('assets/symbols/va512.png')",
      background: "url('assets/symbols/va512.png')",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz513"] = {
      fill: "url('assets/symbols/va513.png')",
      background: "url('assets/symbols/va513.png')",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz514"] = {
      fill: "url('assets/symbols/va514.png')",
      background: "url('assets/symbols/va514.png')",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz515"] = {
      fill: "url('assets/symbols/va515.png')",
      background: "url('assets/symbols/va515.png')",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz516"] = {
      fill: "url('assets/symbols/va516.png')",
      background: "url('assets/symbols/va516.png')",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz517"] = {
      fill: "url('assets/symbols/va517.png')",
      background: "url('assets/symbols/va517.png')",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz518"] = {
      fill: "url('assets/symbols/va518.png')",
      background: "url('assets/symbols/va518.png')",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz519"] = {
      fill: "url('assets/symbols/va519.png')",
      background: "url('assets/symbols/va519.png')",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz520"] = {
      fill: "url('assets/symbols/va520.png')",
      background: "url('assets/symbols/va520.png')",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz521"] = {
      fill: "url('assets/symbols/va521.png')",
      background: "url('assets/symbols/va521.png')",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz522"] = {
      fill: "url('assets/symbols/va522.png')",
      background: "url('assets/symbols/va522.png')",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz523"] = {
      fill: "url('assets/symbols/va523.png')",
      background: "url('assets/symbols/va523.png')",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz524"] = {
      fill: "url('assets/symbols/va524.png')",
      background: "url('assets/symbols/va524.png')",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz525"] = {
      fill: "url('assets/symbols/va525.png')",
      background: "url('assets/symbols/va525.png')",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz526"] = {
      fill: "url('assets/symbols/va526.png')",
      background: "url('assets/symbols/va526.png')",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz527"] = {
      fill: "url('assets/symbols/va527.png')",
      background: "url('assets/symbols/va527.png')",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz528"] = {
      fill: "url('assets/symbols/va528.png')",
      background: "url('assets/symbols/va528.png')",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz529"] = {
      fill: "url('assets/symbols/va529.png')",
      background: "url('assets/symbols/va529.png')",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vaz530"] = {
      fill: "url('assets/symbols/va530.png')",
      background: "url('assets/symbols/va530.png')",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "1px",
      "border-width": "1px",
      "border-style": "solid"
    };
    this.symboolcodes["vog000"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog001"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog002"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog003"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog004"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog005"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog006"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog007"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog008"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog009"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog010"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog011"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog012"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog013"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog014"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog015"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog016"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog017"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog018"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog019"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog020"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog021"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog022"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog023"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog024"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog025"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog026"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog027"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog028"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog029"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["vog030"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "4px",
      "border-width": "4px",
      "border-style": "solid"
    };
    this.symboolcodes["voh000"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#000001",
      "border-color": "#000001",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh001"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebf0d2",
      "border-color": "#ebf0d2",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh002"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#d2ffa5",
      "border-color": "#d2ffa5",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh003"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#b45fd2",
      "border-color": "#b45fd2",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh004"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#64aa2d",
      "border-color": "#64aa2d",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh005"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffc8be",
      "border-color": "#ffc8be",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh006"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff3c82",
      "border-color": "#ff3c82",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh007"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffa096",
      "border-color": "#ffa096",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh008"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#f091be",
      "border-color": "#f091be",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh009"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff9b00",
      "border-color": "#ff9b00",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh010"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#28c846",
      "border-color": "#28c846",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh011"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff6923",
      "border-color": "#ff6923",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh012"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebc3d7",
      "border-color": "#ebc3d7",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh013"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#9b32cd",
      "border-color": "#9b32cd",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh014"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#dc9b78",
      "border-color": "#dc9b78",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh015"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#009b00",
      "border-color": "#009b00",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh016"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#82a591",
      "border-color": "#82a591",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh017"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff78a0",
      "border-color": "#ff78a0",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh018"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#b9d746",
      "border-color": "#b9d746",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh019"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#82c846",
      "border-color": "#82c846",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh020"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#0000ff",
      "border-color": "#0000ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh021"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#cdcdcd",
      "border-color": "#cdcdcd",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh022"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#00ffff",
      "border-color": "#00ffff",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh023"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#afcde1",
      "border-color": "#afcde1",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh024"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#5757ff",
      "border-color": "#5757ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh025"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ff0000",
      "border-color": "#ff0000",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh026"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffff00",
      "border-color": "#ffff00",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh027"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ffffb4",
      "border-color": "#ffffb4",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh028"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#c8a0d7",
      "border-color": "#c8a0d7",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh029"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#fad2ff",
      "border-color": "#fad2ff",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
    this.symboolcodes["voh030"] = {
      fill: "rgba(128,128,128,0)",
      background: "rgba(128,128,128,0)",
      stroke: "#ebe1eb",
      "border-color": "#ebe1eb",
      "stroke-width": "4px",
      "border-width": "4px",
      "stroke-dasharray": "8 10",
      "border-style": "dashed"
    };
  }

  private addPatterns() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const urlSymboolcodes = (Object.values(this.symboolcodes) as any[]).filter(symboolcode => symboolcode.fill.match(/^url/));
    urlSymboolcodes.forEach(symboolcode => {
      const image = new Image();
      const url = new URL(symboolcode.fill.replace(/^url\('|'\)/g, ""), document.baseURI).href;
      image.src = url;
      image.onload = () => {
        this.patterns["url(\"" + url + "\")"] = ctx.createPattern(image, "repeat");
      };
    });
  }
}
