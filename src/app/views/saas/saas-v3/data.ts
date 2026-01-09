import {
  bellIcon,
  fileIcon,
  locationIcon,
  messageIcon,
  peopleIcon,
  rocketIcon,
} from '@public/assets/data/icons'
import { ClientType, FeatureType, StatisticType } from './types'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'
const client6 = 'assets/images/client/06.svg'
const client7 = 'assets/images/client/07.svg'

export const clients: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
]

export const statData: StatisticType[] = [
  {
    title: 'Total Project in year',
    stat: 150,
    suffix: '+',
  },
  {
    title: 'Total hour spent',
    stat: 120,
    suffix: '+',
  },
  {
    title: 'Positive user reviews',
    stat: 10,
    suffix: 'M+',
  },
  {
    title: 'Happy customers',
    stat: 600,
    suffix: '+',
  },
]

export const features: FeatureType[] = [
  {
    title: 'Smart Room Services',
    description:
      'Manage room allocation, guest preferences, special requests, and in-room needs using real-time updates and automated workflows.',
    icon: peopleIcon,
  },
  {
    title: 'Guest Communication Hub',
    description:
      'A centralized digital system for sending updates, messages, and alerts between departments.',
    icon: messageIcon,
  },
  {
    title: 'Digital Booking & Reservation Overview',
    description:
      'View all reservation details, guest history, billing data, and documents in one platform.',
    icon: fileIcon,
  },
  {
    title: 'Luggage & Check-in Assistance',
    description:
      'Cloud V Hotel provides smooth handling for guest luggage during arrival and departure.',
    icon: rocketIcon,
  },
  {
    title: 'Automated Smart Reminders',
    description:
      'Set reminders for daily operations to keep the hotel running smoothly.',
    icon: bellIcon,
  },
  {
    title: 'Location & Navigation Assistance',
    description:
      'Help guests find their way inside the hotel and discover nearby attractions.',
    icon: locationIcon,
  },
]
