import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { Component } from 'react';

class App extends Component {
  state = {
    add: 0,
  };
  subtract = () => {
    if (this.state.add > 0) {
      this.setState({
        add: this.state.add -= 1,
      });
    }
  };
  addition = () => {
    this.setState({
      add: this.state.add += 1,
    });
  };

  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>HomePage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Counter App</IonCardSubtitle>
              <IonCardTitle>
                Total Value {this.state.add}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={this.addition}>Add</IonButton>
              <IonButton onClick={this.subtract}>Subtract</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;