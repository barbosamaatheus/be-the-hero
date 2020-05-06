import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AdMobBanner } from "expo-ads-admob";
import * as MailComposer from "expo-mail-composer";

import logo from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Ola ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso: "${
    incident.title
  }", com o valor de: ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(incident.value)}`;

  function navigationBack() {
    navigation.goBack();
  }

  function sendMain() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }
  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>AJUDE:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contectBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={sendWhatsapp}>
            <Text style={styles.actionButtonText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={sendMain}>
            <Text style={styles.actionButtonText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AdMobBanner
        style={{ position: "absolute", bottom: 0 }}
        adUnitID="ca-app-pub-8494738329887200/9096584913" // "ca-app-pub-8494738329887200/9096584913"
        bannerSize="fullBanner"
        servePersonalizedAds
      />
    </View>
  );
}
