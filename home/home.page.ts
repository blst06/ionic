import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AdicionarCartaoPage } from './adicionar-cartao/adicionar-cartao.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartoes: any[] = []; // Array para armazenar os cartões

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private router: Router // Importando o Router
  ) { }

  async adicionarCartao() {
    const modal = await this.modalController.create({
      component: AdicionarCartaoPage
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        // Se os dados foram retornados, adiciona o cartão ao array
        this.cartoes.push(dataReturned.data);
      }
    });
    return await modal.present();
  }

  // Função para ir para a página de transporte
  irParaTransporte() {
    this.router.navigate(['/transporte']);
  }
}
