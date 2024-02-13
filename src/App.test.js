import { render, screen, image } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Kurrin from "./assets/HomeImage.png"

describe("<App />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const image = screen.getAllBy('img')
    expect(image).toHaveAttribute("src", Kurrin)
  })
})





