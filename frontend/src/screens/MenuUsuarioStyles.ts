import { StyleSheet } from 'react-native';

const COLORS = {
  black: '#0e0e0e',
  ink: '#161616',
  white: '#ffffff',
  offwhite: '#fafafa',
  accent: '#FFD700',
  accentSoft: 'rgba(255, 215, 0, 0.12)',
  muted: '#8a8880',
  mutedLight: 'rgba(255, 255, 255, 0.6)',
  border: 'rgba(255, 255, 255, 0.1)',
  borderDark: 'rgba(14, 14, 14, 0.1)',
};

const FONTS = {
  title: 'DMSans_700Bold',
  titleBold: 'DMSans_700Bold',
  titleReg: 'DMSans_500Medium',
  text: 'DMSans_400Regular',
  textMedium: 'DMSans_500Medium',
  textLight: 'DMSans_300Light',
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 42,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  kicker: {
    color: COLORS.mutedLight,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: FONTS.textMedium,
    marginBottom: 4,
  },

  companyName: {
    color: COLORS.white,
    fontSize: 32,
    letterSpacing: -1,
    fontFamily: FONTS.title,
  },

  logoDot: {
    color: COLORS.accent,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButtonText: {
    fontSize: 19,
  },

  profileButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileInitial: {
    color: COLORS.black,
    fontSize: 17,
    fontFamily: FONTS.titleBold,
  },

  heroCard: {
    backgroundColor: COLORS.ink,
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 8,
  },

  heroTextBlock: {
    marginBottom: 24,
  },

  heroKicker: {
    color: COLORS.accent,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontFamily: FONTS.textMedium,
    marginBottom: 10,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: -1,
    fontFamily: FONTS.title,
    marginBottom: 12,
  },

  heroParagraph: {
    color: COLORS.mutedLight,
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FONTS.text,
  },

  mainButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainButtonText: {
    color: COLORS.black,
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    fontFamily: FONTS.titleBold,
  },

  quickRow: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 16,
  },

  quickRowMobile: {
    flexDirection: 'column',
  },

  quickCard: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.borderDark,
    minHeight: 120,
  },

  quickIcon: {
    fontSize: 24,
    marginBottom: 10,
  },

  quickTitle: {
    color: COLORS.muted,
    fontSize: 13,
    fontFamily: FONTS.textMedium,
    marginBottom: 4,
  },

  quickValue: {
    color: COLORS.black,
    fontSize: 22,
    fontFamily: FONTS.titleBold,
  },

  sectionBlock: {
    marginTop: 30,
  },

  sectionHeadRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  sectionKicker: {
    color: COLORS.accent,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: FONTS.textMedium,
    marginBottom: 8,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 24,
    letterSpacing: -0.5,
    fontFamily: FONTS.titleBold,
  },

  viewMore: {
    color: COLORS.mutedLight,
    fontSize: 13,
    fontFamily: FONTS.textMedium,
  },

  couponsRow: {
    paddingRight: 22,
    gap: 14,
  },

  couponCard: {
    width: 250,
    backgroundColor: COLORS.accent,
    borderRadius: 22,
    padding: 20,
    marginTop: 16,
  },

  couponTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  couponTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontFamily: FONTS.title,
    letterSpacing: -0.8,
  },

  couponBadge: {
    backgroundColor: COLORS.black,
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  couponBadgeText: {
    color: COLORS.accent,
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: FONTS.titleBold,
  },

  couponText: {
    color: 'rgba(0,0,0,0.68)',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONTS.textMedium,
    marginBottom: 18,
  },

  couponCodeBox: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  couponCode: {
    color: COLORS.black,
    fontSize: 13,
    fontFamily: FONTS.titleBold,
    letterSpacing: 1,
  },

  indicationsList: {
    marginTop: 18,
    gap: 14,
  },

  indicationCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
  },

  indicationIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  indicationIconText: {
    fontSize: 22,
  },

  indicationTextBlock: {
    flex: 1,
  },

  indicationTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.titleBold,
    marginBottom: 5,
  },

  indicationText: {
    color: COLORS.mutedLight,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONTS.text,
  },
});