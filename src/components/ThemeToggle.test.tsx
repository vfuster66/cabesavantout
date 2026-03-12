import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ThemeToggle from "./ThemeToggle";

const renderWithTheme = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );

describe("ThemeToggle", () => {
  it("rend le bouton de bascule", () => {
    renderWithTheme();
    expect(
      screen.getByRole("button", { name: /basculer le thème/i }),
    ).toBeDefined();
  });

  it("permet de cliquer sans erreur", () => {
    renderWithTheme();
    const button = screen.getByRole("button", { name: /basculer le thème/i });
    fireEvent.click(button);
    fireEvent.click(button);
  });
});

