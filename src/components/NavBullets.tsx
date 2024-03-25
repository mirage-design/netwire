import { Button, ButtonProps } from "@chakra-ui/react";

export type NavBulletsProps = ButtonProps & {
  active: boolean;
};

export default function NavBullets({ active, ...props }: NavBulletsProps) {
  return (
    <Button
      {...props}
      colorScheme="orange"
      size="xs"
      variant={active ? "solid" : "outline"}
      style={{ borderRadius: "50%" }}
      _hover={active ? { bg: "#9C4221" } : { bg: "#DD6B20", color: "#DD6B20" }}
    ></Button>
  );
}
