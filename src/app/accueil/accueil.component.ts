import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  nouvelleTache: string = '';
  taches: { nom: string; done: boolean; isEditing?: boolean }[] = [];

  // recuperation des tâches 
  ngOnInit() {
    const tachesSauvegarde = localStorage.getItem('taches');
    if (tachesSauvegarde) {
      this.taches = JSON.parse(tachesSauvegarde);
    }
  }

  // ajout nouvelle tâche
  onClicAjouterTache() {
    if (this.nouvelleTache.trim() !== '') {
      this.taches.push({ nom: this.nouvelleTache, done: false, isEditing: false });
      this.nouvelleTache = '';
      this.sauvegarde();
    }
  }

  // suppression tâche 
  onClicSupprimerTache(index: number) {
    this.taches.splice(index, 1);
    this.sauvegarde();
  }

  //changement état 
  onClicTacheChange(index: number) {
    this.taches[index].done = !this.taches[index].done;
    this.sauvegarde();
  }

  // modification tâche
  onClicEditTache(index: number) {
    this.taches[index].isEditing = true;
  }

  // enregistrer modif 
  onSaveEdit(index: number, newNom: string) {
    this.taches[index].nom = newNom.trim();
    this.taches[index].isEditing = false;
    this.sauvegarde();
  }

  // retour 
  onCancelEdit(index: number) {
    this.taches[index].isEditing = false;
  }

  // enregistrement dans le local Storage
  sauvegarde() {
    localStorage.setItem('taches', JSON.stringify(this.taches));
    console.log('Tâches sauvegardées:', this.taches); 
  }
}
