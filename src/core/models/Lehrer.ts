class Lehrer {

  kuerzel: string;
  abwesenheitsnotiz: string;
  fortbildungs_ID: number;
 
  constructor(kuerzel: string, abwesenheitsnotiz: string, fortbildungs_ID: number) {
    this.kuerzel = kuerzel;
    this.abwesenheitsnotiz = abwesenheitsnotiz;
    this.fortbildungs_ID = fortbildungs_ID;
  }

  getKuerzel(){
    return this.kuerzel;
  }

  getAbwesenheitsnotiz(){
    return this.abwesenheitsnotiz;
  }

  getFortbildungsID(){
    return this.fortbildungs_ID;
  }
}