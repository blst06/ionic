import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-cartao',
  templateUrl: './adicionar-cartao.page.html',
  styleUrls: ['./adicionar-cartao.page.scss'],
})
export class AdicionarCartaoPage {
  numeroCartao: string = '';
  nomeProprietario: string = '';
  cpf: string = '';
  endereco: string = '';
  cvc: string = '';
  dataValidade: string = '';
  tipoCartao: string = '';
cartoes: any;

  constructor(private modalController: ModalController) { }

  adicionarCartao() {
    if (this.todosCamposPreenchidos()) {
      const novoCartao = {
        numeroCartao: this.numeroCartao,
        nomeProprietario: this.nomeProprietario,
        cpf: this.cpf,
        endereco: this.endereco,
        cvc: this.cvc,
        dataValidade: this.dataValidade,
        tipoCartao: this.tipoCartao
      };
      this.modalController.dismiss(novoCartao);
    }
  }

  todosCamposPreenchidos(): boolean {
    return !!this.numeroCartao && !!this.nomeProprietario && !!this.cpf && !!this.endereco && !!this.cvc && !!this.dataValidade && !!this.tipoCartao;
  }
}
