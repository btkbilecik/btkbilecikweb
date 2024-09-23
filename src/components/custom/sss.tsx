"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function SSS() {
	return (
		<div className="max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold text-first md:text-4xl md:leading-tight">
					SSS
				</h2>
				<p className="mt-1 text-primary">Sıkça Sorulan Sorular</p>
			</div>

			<div className="max-w-2xl mx-auto text-primary">
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>Kulübünüzün Amacı Nedir?</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="marker:text-first list-disc ps-5 space-y-2 text-sm">
								<li>
									Üniversite öğrencilerine yazılım geliştirme fırsatları sunmak
									ve yazılım becerilerini geliştirmek.
								</li>
								<li>
									Üyeler arasında işbirliği ve bilgi paylaşımını teşvik etmek,
									projeler geliştirmelerini sağlamak.
								</li>
								<li>
									Teknoloji alanında öğrenme ve keşfetme fırsatları sunmak,
									konuk konuşmacılar davet etmek.
								</li>
								<li>
									Kariyer etkinlikleri düzenlemek, staj ve iş fırsatları
									hakkında bilgi sağlamak Üyelerin gelişimini desteklemek,
									mentörlük programları oluşturmak ve projelerle deneyim
									kazandırmak.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-2">
						<AccordionTrigger>Kulübe Nasıl Katılabilirim?</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Web sitemizdeki menüdeki "Giriş Yap" butonuna ya da biraz
							yukarıdaki "Şimdi Üye Ol" butonuna tıklayarak üyelik sayfasına
							gidebilirsiniz.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-3">
						<AccordionTrigger>Kulübün Faaliyetleri Nelerdir?</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="marker:text-first list-disc ps-5 space-y-2 text-sm">
								<li>
									<span className="text-first font-black">Atölye Serisi:</span>{" "}
									Web Uygulaması Geliştirme, Mobil Uygulama Geliştirme, Veri
									Bilimi ve Yapay Zeka, Oyun Geliştirme gibi konularda takım
									çalışmasının ön planda olduğu faailiyet serisi.
								</li>
								<li>
									<span className="text-first font-black">Hackathonlar: </span>{" "}
									Öğrencilerin bir araya gelip, belirlenen bir tema üzerinde
									uygulama geliştirmeleri için belirli bir zaman aralığında
									Ekipler halinde çalışacakları bu faaliyet serisi.
								</li>
								<li>
									<span className="text-first font-black">
										Tech Talks & Workshop:{" "}
									</span>
									Alanında uzman konuşmacılar tarafından düzenlenecek atölye
									çalışmaları ve seminerler ile yeni çıkan teknolojilerle ilgili
									öğrencilerin bilgi edinmesini sağlayan faaliyet serisi.
								</li>
								<li>
									<span className="text-first font-black">
										Açık Kaynak Günleri:{" "}
									</span>
									Öğrenciler, popüler ya da kulübe ait açık kaynak projelerine
									katkıda bulunmak için bir araya gelirler. Bu etkinlik, hem
									yazılım geliştirme süreçlerine hem de topluluk çalışmasına
									dair deneyim kazandıran bir ortam sağlayan faaliyet serisi.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-4">
						<AccordionTrigger>Kulübün Üyelik Ücreti Var mı?</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Hayır kulübe üye olanlardan herhangi bir ücret beklenmez.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
