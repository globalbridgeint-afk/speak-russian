import { I18nProvider, useI18n } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessengerFAB } from "@/components/MessengerFAB";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyContent = () => {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 sm:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "tr" ? "Ana Sayfa" : lang === "vi" ? "Trang chủ" : "Home"}
          </Link>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Global Bridges INT. ("we," "our," or "us") is an international employment agency operating the website global-bridge.world (the "Service"). We specialize in connecting job seekers with employers across borders, providing recruitment, staffing, and employment placement services. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, nationality, date of birth, and other contact details you voluntarily provide through our contact forms or job applications.</li>
                <li><strong className="text-foreground">Employment-Related Data:</strong> Resumes/CVs, work experience, education history, professional qualifications, certifications, language skills, work permits, visa status, and other information relevant to job placement and recruitment services.</li>
                <li><strong className="text-foreground">Identity Documents:</strong> Copies of passports, national ID cards, work authorization documents, and other identification as required for employment verification and placement processes.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information on how the Service is accessed and used, including your IP address, browser type, browser version, pages visited, time and date of visit, time spent on pages, and other diagnostic data.</li>
                <li><strong className="text-foreground">Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our recruitment and employment placement services</li>
                <li>To match job seekers with suitable employment opportunities</li>
                <li>To share candidate profiles with prospective employers (with your consent)</li>
                <li>To verify employment eligibility and work authorization</li>
                <li>To notify you about relevant job opportunities and changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations related to employment and labor laws</li>
                <li>To provide you with news, special offers, and general information about other services we offer, unless you have opted not to receive such information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">4. Google Analytics & Advertising</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may use third-party service providers, including Google Analytics and Google Ads, to monitor and analyze the use of our Service and for advertising purposes.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. You can opt-out of having your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.</li>
                <li><strong className="text-foreground">Google Ads:</strong> We use Google Ads remarketing services to advertise on third-party websites after you have visited our Service. We and our third-party vendors use cookies to inform, optimize, and serve ads based on your past visits to our Service. You can opt out of Google's use of cookies by visiting Google's Ads Settings at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">adssettings.google.com</a>.</li>
                <li><strong className="text-foreground">Google AdSense:</strong> Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it to serve ads to our users based on their visit to our Service and other sites on the Internet. You may opt out of the use of the DoubleClick cookie by visiting the <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Ads Settings</a> page.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may disclose your personal data in good faith belief that such action is necessary to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of Global Bridges INT.</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">7. Your Data Protection Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data. You have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Right of access</strong> — You have the right to request copies of your personal data.</li>
                <li><strong className="text-foreground">Right to rectification</strong> — You have the right to request correction of inaccurate personal data.</li>
                <li><strong className="text-foreground">Right to erasure</strong> — You have the right to request deletion of your personal data under certain conditions.</li>
                <li><strong className="text-foreground">Right to restrict processing</strong> — You have the right to request restriction of processing of your personal data under certain conditions.</li>
                <li><strong className="text-foreground">Right to object to processing</strong> — You have the right to object to our processing of your personal data under certain conditions.</li>
                <li><strong className="text-foreground">Right to data portability</strong> — You have the right to request transfer of the data we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>By email: <a href="mailto:international@globalbridges.info" className="text-accent hover:underline">international@globalbridges.info</a></li>
                <li>By visiting our website: <a href="https://global-bridge.world" className="text-accent hover:underline">global-bridge.world</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <MessengerFAB />
    </div>
  );
};

const PrivacyPolicyPage = () => (
  <I18nProvider>
    <PrivacyContent />
  </I18nProvider>
);

export default PrivacyPolicyPage;
