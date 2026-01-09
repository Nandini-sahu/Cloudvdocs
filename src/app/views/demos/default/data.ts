import { credits } from '@/app/common/constants'

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  url?: string
}

export type ServiceType = {
  title: string
  description: string
  icon: string
  url?: string
}

export type TestimonialType = {
  userId?: User['id']
  user?: User
  title?: string
  comment: string
  rating: number
}

export type User = {
  id?: string
  avatar?: string
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}

const client1Img = 'assets/images/client/01.svg'
const client2Img = 'assets/images/client/02.svg'
const client3Img = 'assets/images/client/03.svg'
const client4Img = 'assets/images/client/04.svg'
const client5Img = 'assets/images/client/05.svg'
const avatar1 = 'assets/images/avatar/01.jpg'
const avatar2 = 'assets/images/avatar/02.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

export const clientData: ClientType[] = [
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
]

export const services: ServiceType[] = [
  {
    title: 'Secure Document Storage',
    description: 'Encrypted, scalable storage for all your company documents with fine-grained access controls.',
    icon: 'bi-cloud-upload',
  },
  {
    title: 'Advanced Search & Indexing',
    description: 'Fast full-text search and metadata indexing so you can find documents instantly.',
    icon: 'bi-search',
  },
  {
    title: 'Access Control & Permissions',
    description: 'Granular role-based access, SSO support, and audit trails for secure collaboration.',
    icon: 'bi-shield-lock',
  },
  {
    title: 'Versioning & Audit Logs',
    description: 'Document version history and immutable audit logs to meet compliance requirements.',
    icon: 'bi-clock-history',
  },
  {
    title: 'Collaboration & Comments',
    description: 'Real-time collaboration, annotations, and comment threads for better teamwork.',
    icon: 'bi-chat-dots',
  },
  {
    title: 'Integrations & APIs',
    description: 'Connect with existing tools through APIs and webhooks to automate workflows.',
    icon: 'bi-plug',
  },
  {
    title: 'Compliance & Security',
    description: 'Encryption, retention policies, and compliance controls to protect sensitive data.',
    icon: 'bi-shield-check',
  },
  {
    title: 'Automated Workflows',
    description: 'Automate approvals, routing, and notifications to eliminate manual work.',
    icon: 'bi-gear',
  },
]

export const userData: User[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett',
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz',
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: userData[0],
    comment:
      "The room was comfortable, clean, and beautifully maintained. We truly enjoyed every moment.",
    rating: 4.5,
  },
  {
    user: userData[1],
    comment:
      "The food was delicious, and the staff made us feel at home instantly.",
    rating: 4,
  },

  {
    user: userData[2],
    comment:
      credits.name +
      ' The staff was warm, caring, and made our stay absolutely wonderful.',
    rating: 5,
  },
  {
    user: userData[3],
    comment:
      'The environment felt luxurious, calm, and perfect for a relaxing holiday.',
    rating: 4.5,
  },
]
