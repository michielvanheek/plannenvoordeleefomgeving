import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParapluModelService {
  parapluItems = [
    ["parkeren", true],
    ["parkeerplaats", false],
    ["parkeerterrein", false],
    ["parkeergarage", false],
    ["parkeer", "parkeren"],

    ["evenemententerreinen", true],
    ["evenemententerrein", false],
    ["evenementen", true],

    ["archeologi", "archeologie"],
    ["cultuurhistori", "cultuurhistorie"],
    ["erfgoed", true],

    ["waterwinning", true],

    ["geluidszone", "geluidszonering"],
    ["geluidzone", "geluidszonering"],
    ["geluidscontour", "geluidszonering"],
    ["geluidcontour cattelaar", false],
    ["geluidcontour", "geluidszonering"],
    ["geluidruimte", "geluidszonering"],

    ["milieuzone", "milieuzonering"],

    ["kamerverhuur", true],
    ["kamergewijze verhuur", "kamerverhuur"],
    ["sturen op appartementen", "een bepaald type woning of woonvorm"],
    ["bewoning", "een bepaald type woning of woonvorm"],
    ["bouwwerken", "een bepaald type bouwwerk"],

    ["reclamenota",
        ["reclamenota", "reclame-uitingen"]
    ],
    ["welstandsnota",
        ["welstandsnota", "uiterlijke vormgeving van gebouwen"]
    ]
  ];
}
