import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CatShow from '../Pages/CatShow'


describe("<CatShow />", () => {

    it("renders single cat", (cats) => {
      const cat = "1";
      render(
        <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
          <Routes>
            <Route path="catshow/:id" element={<CatShow cats={cats} />} />
          </Routes>
        </MemoryRouter>
      )
      screen.logTestingPlaygroundURL()
      const catName = screen.getByText(cats.name)
      expect(catName).toBeInTheDocument()
    })
  })


