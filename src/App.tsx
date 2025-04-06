import React from 'react';
import { Scissors, Clock, Phone, MapPin, Instagram, Facebook, Star, Calendar, Mail, Quote, Award, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Faith Hair Design and Beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="text-white text-2xl font-serif">Faith</div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#gallery" className="hover:text-gray-300">Gallery</a>
            <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Faith Hair Design and Beauty</h1>
          <p className="text-xl text-gray-200 mb-8">Where Style Meets Sophistication</p>
          <a
            href="#book"
            className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Book Appointment
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Welcome to Faith</h2>
              <p className="text-gray-600 mb-6">
                Since 2010, Faith Hair Design and Beauty has been at the forefront of hair styling excellence in Central London. 
                Our team of expert stylists combines years of experience with the latest trends to create looks that 
                enhance your natural beauty.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-gray-700" />
                  <span>Award Winning</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-700" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Salon interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Haircut & Styling",
                price: "From £45",
                desc: "Precision cutting and styling tailored to your face shape and lifestyle",
                image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Color & Highlights",
                price: "From £85",
                desc: "Full color, balayage, or highlights using premium products",
                image: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Treatment & Care",
                price: "From £35",
                desc: "Luxury hair treatments and deep conditioning services",
                image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <p className="text-gray-800 font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Price List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-6">Cut & Style</h3>
              <div className="space-y-4">
                {[
                  { service: "Ladies Cut & Finish", price: "£45-£65" },
                  { service: "Mens Cut & Style", price: "£35-£45" },
                  { service: "Children's Cut", price: "£25-£35" },
                  { service: "Blow Dry", price: "£35" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.service}</span>
                    <span className="text-gray-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Color</h3>
              <div className="space-y-4">
                {[
                  { service: "Full Color", price: "£85-£120" },
                  { service: "Highlights", price: "£95-£140" },
                  { service: "Balayage", price: "£140-£180" },
                  { service: "Root Touch-up", price: "£65" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.service}</span>
                    <span className="text-gray-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden group">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                review: "Absolutely love my new hair! The team at Faith always knows exactly what I want.",
                rating: 5
              },
              {
                name: "James Wilson",
                review: "Best salon in London. Professional service and amazing results every time.",
                rating: 5
              },
              {
                name: "Emma Davis",
                review: "The attention to detail and level of service is outstanding. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.review}</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Flexible Hours", desc: "Open Tuesday - Sunday, 9am - 8pm" },
              { icon: <MapPin className="w-8 h-8" />, title: "Prime Location", desc: "Central London, Near Oxford Street" },
              { icon: <Star className="w-8 h-8" />, title: "Expert Stylists", desc: "Award-winning team with 10+ years experience" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-white rounded-full shadow-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Visit Us</h2>
          <p className="text-gray-600 mb-8">
            123 Oxford Street, London W1D 2LG
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p>Tuesday - Friday: 9am - 8pm</p>
                <p>Saturday: 9am - 6pm</p>
                <p>Sunday: 10am - 4pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a href="tel:+442012345678" className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +44 20 1234 5678
                </a>
                <a href="mailto:info@elegancehair.com" className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@elegancehair.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
{/*             <a href="https://instagram.com" className="flex items-center hover:text-gray-600">
              <Instagram className="w-5 h-5 mr-2" />
              @Faith
            </a> */}
            <a href="https://www.facebook.com/people/Faith-Hair-Design-and-Beauty/100054506977679/" className="flex items-center hover:text-gray-600">
              <Facebook className="w-5 h-5 mr-2" />
              Faith Hair Design and Beauty
            </a>
          </div>
          <div className="mt-8">
            <a
              href="#book"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif mb-4 md:mb-0">Faith</div>
          <div className="text-sm text-gray-400">
            © 2024 Faith Hair Design and Beauty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
