// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import   Twitter   from 'mdi-material-ui/Twitter' 
import   Discord   from 'mdi-material-ui/Discord' 
import   Timeline   from 'mdi-material-ui/Timeline' 
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
 
const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      badgeContent: 'new',
      badgeColor: 'error',
      path: '/scanner',
      /*  children: [
      
        {
          title: 'Scanner',
          path: '/scanner'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        } 
      ]*/
    },
    {
      sectionTitle: 'Section'
    }, 
    {
      title: 'Tokenomics',
      icon: GoogleCirclesExtended,
      path: '/tokenomics'
    },
    {
      title: 'Whitepaper',
      icon: MessageOutline,
      path: '/whitepaper'
    }, 
    {
      title: 'Roadmap',
      icon: CalendarBlankOutline,
      path: '/roadmap'
    }, 
    {
      title: 'Twitter',
      icon: Twitter, 
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/Coinalyzer'
    },
    {
      title: 'Discord',
      icon: Discord, 
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/Coinalyzer'
    },
    {
      title: 'Telegram',
      icon: Timeline, 
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/Coinalyzer'
    }, 
  ]
}

export default navigation
