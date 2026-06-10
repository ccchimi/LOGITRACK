import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './MenuUsuarioStyles';

const coupons = [
  {
    title: '20% OFF',
    text: 'En tu próximo envío por tardanza en tu anterior pedido.',
    code: 'LOGI20',
  },
];

const indications = [
  {
    icon: '📦',
    title: 'Prepará el paquete',
    text: 'Asegurate de embalarlo correctamente antes de solicitar el retiro.',
  },
  {
    icon: '📍',
    title: 'Revisá la dirección',
    text: 'Confirmá origen y destino para evitar demoras en el recorrido.',
  },
  {
    icon: '🕒',
    title: 'Seguimiento en vivo',
    text: 'Una vez creado el envío, vas a poder ver cada etapa del trayecto.',
  },
];

const quickStats = [
  {
    icon: '🚚',
    title: 'En camino',
    value: '2 envíos',
  },
  {
    icon: '✅',
    title: 'Entregados',
    value: '14 pedidos',
  },
];

export default function MenuUsuarioScreen() {
  const navigation = useNavigation<any>();
  const { width } = useWindowDimensions();

  const isMobile = width < 760;

  const irASolicitudEnvio = () => {
    navigation.navigate('SolicitudEnvio');
  };

  const irAPerfil = () => {
    navigation.navigate('Perfil');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Panel de usuario</Text>
            <Text style={styles.companyName}>
              Logitrak<Text style={styles.logoDot}>.</Text>
            </Text>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity activeOpacity={0.75} style={styles.iconButton}>
              <Text style={styles.iconButtonText}>⚙️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.profileButton}
              onPress={irAPerfil}
            >
              <Text style={styles.profileInitial}>U</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroKicker}>Enviar ahora</Text>
            <Text style={styles.heroTitle}>Mové tu paquete en minutos</Text>
            <Text style={styles.heroParagraph}>
              Creá una solicitud, elegí origen y destino, y seguí el envío en
              tiempo real desde Logitrak.
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.mainButton}
            onPress={irASolicitudEnvio}
          >
            <Text style={styles.mainButtonText}>Realizar nuevo envío</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.quickRow, isMobile && styles.quickRowMobile]}>
          {quickStats.map((item) => (
            <View key={item.title} style={styles.quickCard}>
              <Text style={styles.quickIcon}>{item.icon}</Text>
              <Text style={styles.quickTitle}>{item.title}</Text>
              <Text style={styles.quickValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionBlock}>
          <View style={styles.sectionHeadRow}>
            <View>
              <Text style={styles.sectionKicker}>Cupones</Text>
              <Text style={styles.sectionTitle}>Promos disponibles</Text>
            </View>

            <TouchableOpacity activeOpacity={0.75}>
              <Text style={styles.viewMore}>Ver todo</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.couponsRow}
          >
            {coupons.map((coupon) => (
              <View key={coupon.code} style={styles.couponCard}>
                <View style={styles.couponTopRow}>
                  <Text style={styles.couponTitle}>{coupon.title}</Text>

                  <View style={styles.couponBadge}>
                    <Text style={styles.couponBadgeText}>Nuevo</Text>
                  </View>
                </View>

                <Text style={styles.couponText}>{coupon.text}</Text>

                <View style={styles.couponCodeBox}>
                  <Text style={styles.couponCode}>{coupon.code}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionKicker}>Indicaciones</Text>
          <Text style={styles.sectionTitle}>Antes de pedir un envío</Text>

          <View style={styles.indicationsList}>
            {indications.map((item) => (
              <View key={item.title} style={styles.indicationCard}>
                <View style={styles.indicationIcon}>
                  <Text style={styles.indicationIconText}>{item.icon}</Text>
                </View>

                <View style={styles.indicationTextBlock}>
                  <Text style={styles.indicationTitle}>{item.title}</Text>
                  <Text style={styles.indicationText}>{item.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}