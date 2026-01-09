# Life Admin Assistant Chrome Extension

A Chrome browser extension that activates  whenever a web page contains a form. It can record values entered into the form and when sees matching fields it offers a context menu to displaying the value that it can autfill. The extension features a modern, Axiom-inspired design built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 **Modern Design**: Clean, Axiom-inspired UI with smooth animations
- 🤖 **Smart Detection**: Automatically detects web forms and displays the assistant
- 💬 **Chat Interface**: Interactive chat assistant with message history
- 📱 **Responsive**: Works seamlessly across different screen sizes
- ⚡ **Fast**: Built with Vite for optimal performance
- 🛠️ **Developer Friendly**: TypeScript, React, and modern tooling

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite with crxjs plugin
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Chrome browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd life-admin-extension
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Development mode**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

### Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` folder (after building)
4. The extension will appear in your extensions list

## Usage

1. **Automatic Detection**: The extension automatically detects when a webpage contains forms
2. **Chat Assistant**: A chat popup will appear in the bottom-right corner
3. **Interactive Help**: Ask questions about forms, get assistance with filling them out
4. **Minimize/Maximize**: Click the X button to minimize, or the chat icon to restore

## Project Structure

```
life-admin-extension/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── Popup.tsx     # Main chat popup component
│   │   
│   │   └── utils.ts      # Utility functions
│   │   
│   │   └── content.tsx       # Content script for form detection
│   │   
│   │   └── popup.tsx         # Extension popup entry point
│   │   
│   │   └── popup.html        # Extension popup HTML
│   │   
│   │   └── index.css         # Main styles
│   │   
│   │   └── content.css       # Content script styles
│   │   
│   ├── manifest.json         # Chrome extension manifest
│   ├── vite.config.ts        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── tsconfig.json         # TypeScript configuration
│   └── package.json          # Dependencies and scripts
│   
└── README.md
```

## Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Key Features Implementation

#### Form Detection
The extension uses a `MutationObserver` to watch for DOM changes and detect when forms are added to the page:

```typescript
function detectForms(): boolean {
  const forms = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input, textarea, select')
  return forms.length > 0 || inputs.length > 0
}
```

#### Chat Interface
The chat component manages message state and provides a responsive interface:

```typescript
const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: 'Hello! I\'m your Life Admin Assistant...',
    isUser: false,
    timestamp: new Date()
  }
])
```

## Customization

### Styling
The extension uses Tailwind CSS with custom design tokens inspired by Axiom. You can modify the colors and styling in:

- `tailwind.config.js` - Design tokens and theme configuration
- `src/index.css` - CSS custom properties and base styles

### Components
All UI components are built with shadcn/ui patterns and can be customized in the `src/components/ui/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from [Axiom](https://axiom.co)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev) 