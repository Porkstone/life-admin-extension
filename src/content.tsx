import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './components/Popup'
import './content.css'

// Function to detect forms on the page
function detectForms(): boolean {
  const forms = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input, textarea, select')
  return forms.length > 0 || inputs.length > 0
}

// Function to create and inject the popup
function createPopup() {
  // Check if popup already exists
  if (document.getElementById('life-admin-popup')) {
    return
  }

  // Create container for the popup
  const popupContainer = document.createElement('div')
  popupContainer.id = 'life-admin-popup'
  popupContainer.style.position = 'fixed'
  popupContainer.style.top = '0'
  popupContainer.style.left = '0'
  popupContainer.style.width = '100%'
  popupContainer.style.height = '100%'
  popupContainer.style.pointerEvents = 'none'
  popupContainer.style.zIndex = '999999'
  document.body.appendChild(popupContainer)

  // Create React root and render popup
  const root = ReactDOM.createRoot(popupContainer)
  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  )
}

// Function to remove popup
function removePopup() {
  const popup = document.getElementById('life-admin-popup')
  if (popup) {
    popup.remove()
  }
}

// Observer to watch for DOM changes
const observer = new MutationObserver(() => {
  if (detectForms()) {
    // Small delay to ensure forms are fully loaded
    setTimeout(() => {
      if (!document.getElementById('life-admin-popup')) {
        createPopup()
      }
    }, 1000)
  } else {
    removePopup()
  }
})

// Start observing when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (detectForms()) {
      setTimeout(createPopup, 1000)
    }
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
} else {
  if (detectForms()) {
    setTimeout(createPopup, 1000)
  }
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// Clean up observer when page unloads
window.addEventListener('beforeunload', () => {
  observer.disconnect()
  removePopup()
}) 