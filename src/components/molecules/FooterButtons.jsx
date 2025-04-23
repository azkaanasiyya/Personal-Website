import Button from '@/components/atoms/Button';

function FooterButtons() {
  return (
    <div className="flex flex-row gap-[15px]">
      <Button variant="primary">Email Me</Button>
      <Button variant="outline">WhatsApp</Button>
    </div>
  );
}

export default FooterButtons;
