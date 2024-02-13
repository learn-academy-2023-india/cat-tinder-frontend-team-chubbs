import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import CatNew from '../Pages/CatNew'

describe("<CatNew />", () => {
    it("renders a new cat name", () => {
      render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
      )
      const catNewName = screen.getByRole("textbox", {name: /name/i})
      expect(catNewName).toBeInTheDocument()
     
    })
   
    it("renders a new cat age", () => {
        render(
          <BrowserRouter>
              <CatNew />
          </BrowserRouter>
        )
        const catNewAge = screen.getByRole('spinbutton')
        expect(catNewAge).toBeInTheDocument()
      })

      it("renders what you enjoy", () => {
        render(
          <BrowserRouter>
              <CatNew />
          </BrowserRouter>
        )
        const catNewEnjoy = screen.getByPlaceholderText(/minimum characters 10/i)
        expect(catNewEnjoy).toBeInTheDocument()
      })
      
      it("renders the URL of your picture", () => {
        render(
          <BrowserRouter>
              <CatNew />
          </BrowserRouter>
        )
        const catNewEnjoy = screen.getByPlaceholderText(/URL goes here/i)
        expect(catNewEnjoy).toBeInTheDocument()
      })
  })