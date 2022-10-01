import { CustomLink } from "@/components/CustomLink";
import { Button } from "@/features/Footer/components/Button";

const routes = [
  {
    name: "Privacidad",
    url: "/terms/privacy-policy/",
  },
  {
    name: "Condiciones",
    url: "/terms/",
  },
  {
    name: "Mapa del sitio",
    url: "/sitemaps/",
  },
  {
    name: "Datos de la empresa",
    url: "/about/",
  },
];

export const FooterV2 = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 z-10 flex w-full justify-between border-t border-solid bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">{year} Airbnb, Inc.</span>
        {routes.map((route) => (
          <>
            <span>·</span>
            <CustomLink key={route.name} href={route.url}>
              <span className="text-sm hover:underline">{route.name}</span>
            </CustomLink>
          </>
        ))}
      </div>
      <div className="flex gap-4">
        <Button title="English (US)" />
        <Button title="USD" />
        <Button title="Ayuda y recursos" />
      </div>
    </footer>
  );
};
