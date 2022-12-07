module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
      windowBarBackground: 'var(--background-windowBarBackground)',
      windowBarText: 'var(--color-windowBarText)',
      SideBarBackground: 'var(--background-SideBarBackground)',
      SideBarText: 'var(--color-SideBarText)',
      WindowBarIcon: 'var(--color-WindowBarIcon)',
      SideBarIconText: 'var(--color-SideBarIconText)',
      SideBarIconActiveBackground:
        'var(--background-SideBarIconActiveBackground)',
      SideBarIconInActiveBackground:
        'var(--background-SideBarIconInActiveBackground)',
      MailCardBackground: 'var(--background-MailCardBackground)',
      MailCardUserIconBackground: 'var(--color-MailCardUserIconBackground)',
      MailCardUserIconText: 'var(--color-MailCardUserIconText)',
      MailCardTime: 'var(--color-MailCardTime)',
      MailCardSenderText: 'var(--color-MailCardSenderText)',
      MailCardStarredIcon: 'var(--color-MailCardStarredIcon)',
      MailCardMessageTruncated: 'var(--color-MailCardMessageTruncated)',
      MailCardReadButtonBackground:
        'var(--background-MailCardReadButtonBackground)',
      MailCardReadButtonText: 'var(--color-MailCardReadButtonText)',
      MailCardUnreadIcon: 'var(--color-MailCardUnreadIcon)',
      MailCardSenderName: 'var(--color-MailCardSenderName)',
      RightIntroName: 'var(--color-RightIntroName)',
      RightIntroDescription: 'var(--color-RightIntroDescription)',
      StatCardBackground: 'var(--color-StatCardBackground)',
      StatCardText: 'var(--color-StatCardText)',
      BannerCardBackground: 'var(--background-BannerCardBackground)',
      BannerCardText: 'var(--color-BannerCardText)',
      BannerCardButtonBackground:
        'var(--background-BannerCardButtonBackground)',
      BannerCardButtonText: 'var(--color-BannerCardButtonText)',
      BannerCardTitle: 'var(--color-BannerCardTitle)',
      SettingsCardBackground: 'var(--background-SettingsCardBackground)',
      SettingsCardText: 'var(--color-SettingsCardText)',
      SettingsButtonBackground: 'var(--background-SettingsButtonBackground)',
      SettingsCardButtonText: 'var(--color-SettingsCardButtonText)',
      SettingsCardTitle: 'var(--color-SettingsCardTitle)',
      searchBackground: 'var(--background-searchBackground)',
      searchText: 'var(--color-searchText)',
      SearchIcons: 'var(--color-SearchIcons)',
      UserEmailText: 'var(--color-UserEmailText)',
      LoadingText: 'var(--color-LoadingText)',
      LoadingBackground: 'var(--background-LoadingBackground)',
      LoadingIcon: 'var(--color-LoadingIcon)',
      DisplayMailTopIconBackground:
        'var(--background-DisplayMailTopIconBackground)',
      DisplayMailTopIcon: 'var(--color-DisplayMailTopIcon)',
      DisplayMailUserIconBackground:
        'var(--background-DisplayMailUserIconBackground)',
      DisplayMailUserIcon: 'var(--color-DisplayMailUserIcon)',
      DisplayMailToolTip: 'var(--color-DisplayMailToolTip)',
      DisplayMailSenderIcon: 'var(--color-DisplayMailSenderIcon)'
    }
  },
  backgroundColor: (theme) => ({
    ...theme('colors')
  }),
  plugins: [require('tailwind-scrollbar')]
}
