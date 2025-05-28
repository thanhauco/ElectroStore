import { Component } from '../types';

export const components: Component[] = [
  {
    id: '1',
    name: 'Arduino Uno R3',
    description: 'The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button.',
    price: 23.99,
    category: 'Microcontrollers',
    manufacturer: 'Arduino',
    imageUrl: 'https://images.pexels.com/photos/6490369/pexels-photo-6490369.jpeg',
    stock: 50,
    rating: 4.8,
    specs: {
      processor: 'ATmega328P',
      digitalPins: 14,
      analogPins: 6,
      memory: '32 KB',
      voltage: '5V',
      clockSpeed: '16 MHz'
    },
    tags: ['arduino', 'microcontroller', 'electronics', 'DIY']
  },
  {
    id: '2',
    name: 'Raspberry Pi 4 Model B',
    description: 'The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers, offering ground-breaking increases in processor speed, multimedia performance, memory, and connectivity.',
    price: 45.99,
    category: 'Single Board Computers',
    manufacturer: 'Raspberry Pi Foundation',
    imageUrl: 'https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg',
    stock: 25,
    rating: 4.9,
    specs: {
      processor: 'Broadcom BCM2711',
      cores: 4,
      ram: '4GB',
      wifi: 'IEEE 802.11ac',
      bluetooth: '5.0',
      usb: '2x USB 3.0, 2x USB 2.0'
    },
    tags: ['raspberry pi', 'computer', 'electronics', 'programming']
  },
  {
    id: '3',
    name: 'ESP32 Development Board',
    description: 'The ESP32 is a powerful, generic Wi-Fi+BT+BLE MCU module that targets a wide variety of applications, from low-power sensor networks to the most demanding tasks, such as voice encoding, music streaming, and MP3 decoding.',
    price: 12.99,
    category: 'WiFi Modules',
    manufacturer: 'Espressif Systems',
    imageUrl: 'https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg',
    stock: 100,
    rating: 4.6,
    specs: {
      processor: 'Tensilica Xtensa LX6',
      ram: '520 KB',
      flash: '4 MB',
      wifi: 'IEEE 802.11 b/g/n',
      bluetooth: '4.2',
      gpio: '36 pins'
    },
    tags: ['esp32', 'wifi', 'bluetooth', 'iot']
  },
  {
    id: '4',
    name: '10K Ohm Resistor Pack',
    description: 'Pack of 100 10K Ohm resistors with 5% tolerance. Perfect for prototyping and electronics projects.',
    price: 4.99,
    category: 'Passive Components',
    manufacturer: 'Generic',
    imageUrl: 'https://images.pexels.com/photos/6190322/pexels-photo-6190322.jpeg',
    stock: 200,
    rating: 4.5,
    specs: {
      resistance: '10K Ohm',
      tolerance: '5%',
      power: '0.25W',
      quantity: 100,
      type: 'Carbon Film'
    },
    tags: ['resistor', 'passive', 'electronics']
  },
  {
    id: '5',
    name: 'Breadboard 830 Point',
    description: 'Solderless 830 tie-point breadboard for building and testing electronic circuits quickly without soldering.',
    price: 5.99,
    category: 'Prototyping',
    manufacturer: 'Generic',
    imageUrl: 'https://images.pexels.com/photos/6190473/pexels-photo-6190473.jpeg',
    stock: 75,
    rating: 4.7,
    specs: {
      points: 830,
      material: 'ABS plastic',
      color: 'White',
      dimensions: '165mm x 55mm x 10mm',
      binding: 'Phosphor Bronze Nickel Plated'
    },
    tags: ['breadboard', 'prototyping', 'testing']
  },
  {
    id: '6',
    name: 'Jumper Wire Kit',
    description: 'Set of 120 multi-colored jumper wires for breadboard connections (male-to-male, male-to-female, female-to-female).',
    price: 7.99,
    category: 'Cables & Connectors',
    manufacturer: 'Generic',
    imageUrl: 'https://images.pexels.com/photos/8004533/pexels-photo-8004533.jpeg',
    stock: 150,
    rating: 4.6,
    specs: {
      quantity: 120,
      types: 'M-M, M-F, F-F',
      length: '20cm',
      material: 'Copper, PVC',
      colors: 'Multiple'
    },
    tags: ['jumper wires', 'cables', 'connectors']
  }
];

export const categories = [
  {
    id: 'microcontrollers',
    name: 'Microcontrollers',
    description: 'Programmable integrated circuits for embedded applications',
    imageUrl: 'https://images.pexels.com/photos/6490369/pexels-photo-6490369.jpeg'
  },
  {
    id: 'single-board-computers',
    name: 'Single Board Computers',
    description: 'Complete computers built on a single circuit board',
    imageUrl: 'https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg'
  },
  {
    id: 'wifi-modules',
    name: 'WiFi Modules',
    description: 'Components that enable wireless connectivity',
    imageUrl: 'https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg'
  },
  {
    id: 'passive-components',
    name: 'Passive Components',
    description: 'Resistors, capacitors, inductors, and other non-active parts',
    imageUrl: 'https://images.pexels.com/photos/6190322/pexels-photo-6190322.jpeg'
  },
  {
    id: 'prototyping',
    name: 'Prototyping',
    description: 'Tools for building and testing circuits',
    imageUrl: 'https://images.pexels.com/photos/6190473/pexels-photo-6190473.jpeg'
  },
  {
    id: 'cables-connectors',
    name: 'Cables & Connectors',
    description: 'Wires, jumpers, and connection components',
    imageUrl: 'https://images.pexels.com/photos/8004533/pexels-photo-8004533.jpeg'
  }
];

export const manufacturers = [
  {
    id: 'arduino',
    name: 'Arduino',
    logo: 'https://images.pexels.com/photos/6490369/pexels-photo-6490369.jpeg',
    description: 'Open-source electronics platform based on easy-to-use hardware and software'
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi Foundation',
    logo: 'https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg',
    description: 'UK-based charity that works to put the power of computing and digital making into the hands of people all over the world'
  },
  {
    id: 'espressif',
    name: 'Espressif Systems',
    logo: 'https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg',
    description: 'Provider of wireless communications and Wi-Fi chips which are widely used in mobile devices and the Internet of Things applications'
  },
  {
    id: 'generic',
    name: 'Generic',
    logo: 'https://images.pexels.com/photos/6190322/pexels-photo-6190322.jpeg',
    description: 'Various manufacturers of standard electronic components'
  }
];