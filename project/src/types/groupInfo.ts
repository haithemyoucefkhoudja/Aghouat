export default interface GroupInfo {
    id: number; 
    dossierInscriptionId: number;
    dossierEtudiantId: number;
    individuId: number;
    individuIdentifiant: string;
    nomEtudiant: string;
    prenomEtudiant: string;
    nomEtudiantArabe: string;
    prenomEtudiantArabe: string;
    numeroMatricule: string;
    numeroInscription: string;
    etudiantCivilite: string;
    urlPhoto: string;
    etudiantSexe: string;
    groupePedagogiqueId: number;
    codeGroupePedagogique: string;
    nomGroupePedagogique: string;
    idSection: number;
    codeSection: string;
    nomSection: string;
    refGroupeId: number;
    dateAffectation: Date;
    dateNaissanceEtudiant: Date;
    moyenneBac: number;
    lastMoyenne: number;
    periodeId: number;
    periodeCode: string;
    periodeLibelleLongLt: string;
  }
  