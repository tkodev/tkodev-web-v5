import keyBy from 'lodash/keyBy'
import { type ClientEntry } from '@/types/career'

const clientEntries: ClientEntry[] = [
  {
    id: 'air-canada',
    basic: {
      name: 'Air Canada',
      href: 'https://www.aircanada.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/air-canada/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Canada logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/air-canada/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Canada logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/air-canada/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Canada logo'
      }
    }
  },
  {
    id: 'air-miles',
    basic: {
      name: 'Air Miles',
      href: 'https://www.airmiles.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/air-miles/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Miles logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/air-miles/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Miles logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/air-miles/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Air Miles logo'
      }
    }
  },
  {
    id: 'baby-jogger',
    basic: {
      name: 'Baby Jogger',
      href: 'https://babyjogger.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/baby-jogger/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Baby Jogger logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/baby-jogger/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Baby Jogger logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/baby-jogger/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Baby Jogger logo'
      }
    }
  },
  {
    id: 'telus-digital',
    basic: {
      name: 'TELUS Digital',
      href: 'https://www.telusdigital.com/technology-partners/google'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/telus-digital/base@1x.png',
        width: 200,
        height: 50,
        alt: 'TELUS Digital logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/telus-digital/light@1x.png',
        width: 200,
        height: 50,
        alt: 'TELUS Digital logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/telus-digital/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'TELUS Digital logo'
      }
    }
  },
  {
    id: 'loblaws-digital',
    basic: {
      name: 'Loblaw Digital',
      href: 'https://loblawdigital.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/loblaws-digital/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Loblaw Digital logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/loblaws-digital/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Loblaw Digital logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/loblaws-digital/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Loblaw Digital logo'
      }
    }
  },
  {
    id: 'beyond',
    basic: {
      name: 'Beyond MPD',
      href: 'https://beyondmpd.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/beyond/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Beyond MPD logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/beyond/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Beyond MPD logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/beyond/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Beyond MPD logo'
      }
    }
  },
  {
    id: 'brandfire',
    basic: {
      name: 'Brandfire',
      href: 'https://www.brandfire.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/brandfire/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Brandfire logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/brandfire/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Brandfire logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/brandfire/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Brandfire logo'
      }
    }
  },
  {
    id: 'canada-dry',
    basic: {
      name: 'Canada Dry',
      href: 'https://www.canadadry.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/canada-dry/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Canada Dry logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/canada-dry/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Canada Dry logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/canada-dry/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Canada Dry logo'
      }
    }
  },
  {
    id: 'ge-appliances',
    basic: {
      name: 'GE Appliances',
      href: 'https://geappliances.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/ge-appliances/base@1x.png',
        width: 200,
        height: 50,
        alt: 'GE Appliances logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/ge-appliances/light@1x.png',
        width: 200,
        height: 50,
        alt: 'GE Appliances logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/ge-appliances/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'GE Appliances logo'
      }
    }
  },
  {
    id: 'monogram',
    basic: {
      name: 'Monogram',
      href: 'https://monogram.ca'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/monogram/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Monogram logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/monogram/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Monogram logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/monogram/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Monogram logo'
      }
    }
  },
  {
    id: 'peoples-group',
    basic: {
      name: 'Peoples Group',
      href: 'https://www.peoplestrust.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/peoples-group/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Peoples Group logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/peoples-group/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Peoples Group logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/peoples-group/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Peoples Group logo'
      }
    }
  },
  {
    id: 'quantum-mob',
    basic: {
      name: 'Quantum Mob',
      href: 'https://www.linkedin.com/company/quantumMob/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/quantum-mob/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Quantum Mob logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/quantum-mob/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Quantum Mob logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/quantum-mob/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Quantum Mob logo'
      }
    }
  },
  {
    id: 'rewardops',
    basic: {
      name: 'RewardOps',
      href: 'https://www.rewardops.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/rewardops/base@1x.png',
        width: 200,
        height: 50,
        alt: 'RewardOps logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/rewardops/light@1x.png',
        width: 200,
        height: 50,
        alt: 'RewardOps logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/rewardops/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'RewardOps logo'
      }
    }
  },
  {
    id: 'toffifee',
    basic: {
      name: 'Toffifee',
      href: 'https://www.toffifee.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/toffifee/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Toffifee logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/toffifee/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Toffifee logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/toffifee/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Toffifee logo'
      }
    }
  },
  {
    id: 'toyota',
    basic: {
      name: 'Toyota',
      href: 'https://www.toyota.ca/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/toyota/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Toyota logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/toyota/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Toyota logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/toyota/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Toyota logo'
      }
    }
  },
  {
    id: 'weiser',
    basic: {
      name: 'Weiser Lock',
      href: 'https://ca.weiserlock.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/weiser/base@1x.png',
        width: 200,
        height: 50,
        alt: 'Weiser Lock logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/weiser/light@1x.png',
        width: 200,
        height: 50,
        alt: 'Weiser Lock logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/weiser/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'Weiser Lock logo'
      }
    }
  },
  {
    id: 'kos-interior-design',
    basic: {
      name: "Ko's Interior Design",
      href: 'https://www.kosinteriordesign.com/'
    }
  },
  {
    id: 'tkodev',
    basic: {
      name: 'Tkodev Inc.',
      href: 'https://www.tko.dev/'
    }
  },
  {
    id: 'ocad-university',
    basic: {
      name: 'OCAD University',
      href: 'https://www.ocadu.ca/'
    }
  },
  {
    id: 'techtank-to',
    basic: {
      name: 'TechTank Toronto',
      href: 'https://www.techtankto.com/'
    },
    media: {
      base: {
        type: 'image',
        src: '/career/clients/techtankto/base@1x.png',
        width: 200,
        height: 50,
        alt: 'TechTank Toronto logo'
      },
      light: {
        type: 'image',
        src: '/career/clients/techtankto/light@1x.png',
        width: 200,
        height: 50,
        alt: 'TechTank Toronto logo'
      },
      dark: {
        type: 'image',
        src: '/career/clients/techtankto/dark@1x.png',
        width: 200,
        height: 50,
        alt: 'TechTank Toronto logo'
      }
    }
  },
  {
    id: 'free-code-camp',
    basic: {
      name: 'free-code-camp',
      href: 'https://www.freecodecamp.org/'
    }
  },
  {
    id: 'roc-mar',
    basic: {
      name: 'RocMar Engineering',
      href: 'https://rocmar.ca/'
    }
  },
  {
    id: 'moda-match',
    basic: {
      name: 'Moda Match'
    }
  },
  {
    id: 'pets-above',
    basic: {
      name: 'Pets Above',
      href: 'https://www.petsabove.com/'
    }
  },
  {
    id: 'cardinal-meats',
    basic: {
      name: 'Cardinal Meats',
      href: 'https://www.cardinalmeats.com/'
    }
  },
  {
    id: 'ccpa',
    basic: {
      name: 'Canadian Chiropractic Protective Association',
      href: 'https://www.ccpaonline.ca/'
    }
  },
  {
    id: 'parents-canada',
    basic: {
      name: 'Parents Canada',
      href: 'https://parentscanada.com/'
    }
  }
]

const clientById = keyBy(clientEntries, (clientEntry) => clientEntry.id)

export { clientById, clientEntries }
