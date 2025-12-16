import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Common layout and styles
const layout = (title: string, content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | United States of Kailasa Liberia</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --beige: #F5F5DC;
            --cream: #FFFDD0;
            --maroon: #800000;
            --dark-maroon: #5C0000;
            --gold: #D4AF37;
        }
        
        body {
            font-family: 'Cormorant Garamond', serif;
            background-color: var(--beige);
            color: var(--dark-maroon);
        }
        
        h1, h2, h3, h4 {
            font-family: 'Cinzel', serif;
        }
        
        .nav-link {
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 50%;
            background-color: var(--gold);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
            width: 80%;
        }
        
        .seva-card {
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }
        
        .seva-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .seva-card:hover::before {
            left: 100%;
        }
        
        .seva-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(128, 0, 0, 0.2);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--maroon), var(--dark-maroon));
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(128, 0, 0, 0.3);
        }
        
        .hero-section {
            background: linear-gradient(135deg, rgba(128, 0, 0, 0.9), rgba(92, 0, 0, 0.95)),
                        url('/images/sph-1.jpg') center/cover no-repeat;
            min-height: 70vh;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            background: var(--gold);
            margin: 20px auto;
        }
        
        .gallery-image {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .gallery-image:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(128, 0, 0, 0.3);
        }
        
        .price-tag {
            background: linear-gradient(135deg, var(--gold), #B8960D);
            color: white;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="bg-maroon text-white shadow-lg sticky top-0 z-50" style="background-color: var(--maroon);">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-om text-3xl" style="color: var(--gold);"></i>
                    <div>
                        <h1 class="text-2xl font-bold" style="font-family: 'Cinzel', serif;">United States of Kailasa Liberia</h1>
                        <p class="text-xs opacity-90">Ancient Enlightened Hindu Civilization</p>
                    </div>
                </div>
                <div class="hidden md:flex space-x-6 text-lg">
                    <a href="/" class="nav-link hover:text-yellow-300">Home</a>
                    <a href="/about" class="nav-link hover:text-yellow-300">About Us</a>
                    <a href="/about-sph" class="nav-link hover:text-yellow-300">About SPH</a>
                    <a href="/services" class="nav-link hover:text-yellow-300">Services</a>
                    <a href="/contact" class="nav-link hover:text-yellow-300">Contact</a>
                </div>
                <button class="md:hidden">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    ${content}

    <!-- Footer -->
    <footer class="bg-maroon text-white py-12 mt-20" style="background-color: var(--dark-maroon);">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-bold mb-4" style="color: var(--gold);">United States of Kailasa Liberia</h3>
                    <p class="text-gray-300 text-lg">Reviving the ancient enlightened Hindu civilization through charitable activities and spiritual services.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4" style="color: var(--gold);">Quick Links</h4>
                    <ul class="space-y-2 text-gray-300 text-lg">
                        <li><a href="/" class="hover:text-yellow-300 transition"><i class="fas fa-chevron-right mr-2"></i>Home</a></li>
                        <li><a href="/about" class="hover:text-yellow-300 transition"><i class="fas fa-chevron-right mr-2"></i>About Us</a></li>
                        <li><a href="/about-sph" class="hover:text-yellow-300 transition"><i class="fas fa-chevron-right mr-2"></i>About SPH</a></li>
                        <li><a href="/services" class="hover:text-yellow-300 transition"><i class="fas fa-chevron-right mr-2"></i>Services</a></li>
                        <li><a href="/contact" class="hover:text-yellow-300 transition"><i class="fas fa-chevron-right mr-2"></i>Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4" style="color: var(--gold);">Connect With Us</h4>
                    <div class="flex space-x-4 text-2xl">
                        <a href="#" class="hover:text-yellow-300 transition"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="hover:text-yellow-300 transition"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="hover:text-yellow-300 transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="hover:text-yellow-300 transition"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="mt-6">
                        <p class="text-gray-300 text-lg"><i class="fas fa-envelope mr-2"></i>info@uskailasaliberia.org</p>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
                <p class="text-lg">&copy; 2026 United States of Kailasa Liberia. All rights reserved.</p>
                <p class="mt-2 text-md">Serving humanity through spiritual enlightenment and charitable activities</p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

// Homepage
app.get('/', (c) => {
  const content = `
    <!-- Hero Section -->
    <div class="hero-section flex items-center justify-center text-white">
        <div class="text-center px-6 py-20">
            <h1 class="text-6xl md:text-7xl font-bold mb-6 animate-fade-in" style="font-family: 'Cinzel', serif;">
                United States of Kailasa Liberia
            </h1>
            <p class="text-2xl md:text-3xl mb-8 font-light">
                Reviving the Ancient Enlightened Hindu Civilization
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="/services" class="btn-primary text-white px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition">
                    <i class="fas fa-hands-praying mr-2"></i>Explore Our Services
                </a>
                <a href="/about" class="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-maroon transition">
                    <i class="fas fa-info-circle mr-2"></i>Learn More
                </a>
            </div>
        </div>
    </div>

    <!-- Mission Section -->
    <div class="container mx-auto px-6 py-20">
        <h2 class="text-5xl font-bold text-center mb-4 section-title" style="color: var(--maroon);">Our Sacred Mission</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                <div class="text-6xl mb-6" style="color: var(--maroon);">
                    <i class="fas fa-hand-holding-heart"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Charitable Activities</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Serving humanity through compassionate charitable programs, supporting communities worldwide with the spirit of selfless service.
                </p>
            </div>
            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                <div class="text-6xl mb-6" style="color: var(--maroon);">
                    <i class="fas fa-globe-asia"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Global Programs</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Implementing spiritual and cultural programs across continents, spreading the wisdom of ancient Hindu civilization.
                </p>
            </div>
            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                <div class="text-6xl mb-6" style="color: var(--maroon);">
                    <i class="fas fa-om"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Spiritual Services</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Offering authentic Vedic rituals, pujas, and spiritual practices guided by ancient Hindu traditions and scriptures.
                </p>
            </div>
        </div>
    </div>

    <!-- Featured Services -->
    <div class="bg-cream py-20" style="background-color: var(--cream);">
        <div class="container mx-auto px-6">
            <h2 class="text-5xl font-bold text-center mb-4 section-title" style="color: var(--maroon);">Sacred Services</h2>
            <p class="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Experience the divine through our authentic Vedic rituals and spiritual services
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl seva-card">
                    <img src="/images/guru-puja.jpg" alt="Guru Puja" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Guru Puja</h3>
                        <p class="text-gray-700 mb-4 text-lg">Sacred ceremony to honor and invoke the blessings of the divine guru and spiritual master.</p>
                        <a href="/services" class="btn-primary text-white px-6 py-3 rounded-full inline-block hover:scale-105 transition">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl seva-card">
                    <img src="/images/maheshwara-puja.jpg" alt="Maheshwara Puja" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Maheshwara Puja</h3>
                        <p class="text-gray-700 mb-4 text-lg">Divine worship of Lord Shiva, the supreme consciousness and destroyer of ignorance.</p>
                        <div class="price-tag text-center py-2 px-4 rounded-full inline-block mb-4">$1,008</div>
                        <a href="/services" class="btn-primary text-white px-6 py-3 rounded-full inline-block hover:scale-105 transition">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl seva-card">
                    <img src="/images/rudra-homa.jpg" alt="Rudra Homa" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Rudra Homa</h3>
                        <p class="text-gray-700 mb-4 text-lg">Sacred fire ritual invoking Lord Rudra for spiritual transformation and divine protection.</p>
                        <a href="/services" class="btn-primary text-white px-6 py-3 rounded-full inline-block hover:scale-105 transition">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="/services" class="btn-primary text-white px-12 py-4 rounded-full text-xl font-semibold inline-block hover:scale-105 transition">
                    View All Services <i class="fas fa-arrow-circle-right ml-2"></i>
                </a>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-maroon text-white py-20" style="background: linear-gradient(135deg, var(--maroon), var(--dark-maroon));">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-6" style="font-family: 'Cinzel', serif;">Join Our Sacred Community</h2>
            <p class="text-2xl mb-10 max-w-3xl mx-auto">
                Become part of the ancient enlightened Hindu civilization and experience spiritual transformation
            </p>
            <a href="/contact" class="bg-white px-12 py-4 rounded-full text-xl font-semibold inline-block hover:scale-105 transition" style="color: var(--maroon);">
                <i class="fas fa-envelope mr-2"></i>Contact Us Today
            </a>
        </div>
    </div>
  `;
  
  return c.html(layout('Home', content));
});

// About Us Page
app.get('/about', (c) => {
  const content = `
    <div class="container mx-auto px-6 py-20">
        <h1 class="text-6xl font-bold text-center mb-6 section-title" style="color: var(--maroon); font-family: 'Cinzel', serif;">About Us</h1>
        
        <div class="max-w-5xl mx-auto">
            <div class="bg-white rounded-2xl shadow-2xl p-12 mb-12">
                <div class="flex items-center mb-8">
                    <div class="text-6xl mr-6" style="color: var(--maroon);">
                        <i class="fas fa-temple-hindu"></i>
                    </div>
                    <div>
                        <h2 class="text-4xl font-bold mb-2" style="color: var(--maroon);">Our Vision</h2>
                        <div class="h-1 w-32 rounded" style="background-color: var(--gold);"></div>
                    </div>
                </div>
                <p class="text-xl text-gray-700 leading-relaxed mb-6">
                    The United States of Kailasa Liberia is dedicated to reviving and preserving the ancient enlightened Hindu civilization. We serve as a beacon of spiritual wisdom, cultural heritage, and compassionate service to humanity.
                </p>
                <p class="text-xl text-gray-700 leading-relaxed">
                    Our organization operates as a spiritual embassy, carrying forward the timeless traditions and profound teachings that have guided countless souls toward enlightenment for millennia.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="bg-cream rounded-2xl p-8 shadow-lg" style="background-color: var(--cream);">
                    <div class="text-5xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">Charitable Activities</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        We conduct extensive charitable programs serving communities worldwide, providing food, education, healthcare, and spiritual guidance to those in need. Our compassionate initiatives touch thousands of lives across continents.
                    </p>
                </div>

                <div class="bg-cream rounded-2xl p-8 shadow-lg" style="background-color: var(--cream);">
                    <div class="text-5xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-globe-asia"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">Global Programs</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our global outreach programs span multiple continents, establishing spiritual centers, conducting cultural festivals, and offering educational workshops that preserve and propagate authentic Hindu wisdom and practices.
                    </p>
                </div>

                <div class="bg-cream rounded-2xl p-8 shadow-lg" style="background-color: var(--cream);">
                    <div class="text-5xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">Spiritual Education</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        We offer comprehensive spiritual education programs, teaching ancient scriptures, meditation techniques, yoga practices, and Vedic sciences. Our courses are designed for seekers of all levels, from beginners to advanced practitioners.
                    </p>
                </div>

                <div class="bg-cream rounded-2xl p-8 shadow-lg" style="background-color: var(--cream);">
                    <div class="text-5xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">Community Building</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        We foster vibrant spiritual communities where seekers can connect, grow, and support each other on their spiritual journey. Our community programs include regular satsangs, festivals, and collaborative service projects.
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-2xl p-12">
                <h2 class="text-4xl font-bold mb-6 text-center" style="color: var(--maroon);">Our Values</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                        <div class="text-5xl mb-3" style="color: var(--gold);">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h4 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Compassion</h4>
                        <p class="text-gray-700 text-lg">Serving all beings with love and kindness</p>
                    </div>
                    <div class="text-center">
                        <div class="text-5xl mb-3" style="color: var(--gold);">
                            <i class="fas fa-om"></i>
                        </div>
                        <h4 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Authenticity</h4>
                        <p class="text-gray-700 text-lg">Preserving genuine ancient traditions</p>
                    </div>
                    <div class="text-center">
                        <div class="text-5xl mb-3" style="color: var(--gold);">
                            <i class="fas fa-hands"></i>
                        </div>
                        <h4 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Service</h4>
                        <p class="text-gray-700 text-lg">Dedicated to uplifting humanity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  
  return c.html(layout('About Us', content));
});

// About SPH Page
app.get('/about-sph', (c) => {
  const content = `
    <div class="container mx-auto px-6 py-20">
        <h1 class="text-6xl font-bold text-center mb-6 section-title" style="color: var(--maroon); font-family: 'Cinzel', serif;">
            The Supreme Pontiff of Hinduism
        </h1>
        <h2 class="text-3xl text-center mb-12 text-gray-700" style="font-family: 'Cinzel', serif;">
            Jagatguru Mahasannidhanam His Divine Holiness Bhagavan Sri Nithyananda Paramashivam
        </h2>
        
        <div class="max-w-6xl mx-auto">
            <!-- Introduction -->
            <div class="bg-white rounded-2xl shadow-2xl p-12 mb-12">
                <div class="text-center mb-12">
                    <div class="text-7xl mb-6" style="color: var(--maroon);">
                        <i class="fas fa-om"></i>
                    </div>
                    <h2 class="text-4xl font-bold mb-6" style="color: var(--maroon);">The Reviver of KAILASA</h2>
                    <p class="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        His Divine Holiness Bhagavan Sri Nithyananda Paramashivam is the reviver of KAILASA, the ancient enlightened Hindu civilizational nation. Recognized as the 1008th Incarnation of Paramashiva, SPH is the master who is bringing together all the various sampradayas of Hinduism and has been recognized as the backbone of Hinduism and its future hope.
                    </p>
                    <p class="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        A living embodiment of divine consciousness, His Holiness guides millions of devotees worldwide on the path of spiritual enlightenment and self-realization, offering authentic spiritual guidance rooted in ancient Vedic wisdom.
                    </p>
                </div>
            </div>

            <!-- Royal Lineage & Recognition -->
            <div class="bg-cream rounded-2xl shadow-xl p-12 mb-12" style="background-color: var(--cream);">
                <h2 class="text-4xl font-bold mb-8 text-center" style="color: var(--maroon);">Sacred Lineage & Divine Recognition</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="text-5xl mb-4 text-center" style="color: var(--maroon);">
                            <i class="fas fa-crown"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: var(--maroon);">233rd Pontiff</h3>
                        <p class="text-lg text-gray-700 leading-relaxed text-center">
                            Ordained as the 233rd Guru Mahasannidhanam (Pontiff) of Kanchee Kailasa Sarvajnapeetham (Thondai Mandala Aadheenam), one of the oldest and most revered Hindu monastic universities, at the tender age of 10.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="text-5xl mb-4 text-center" style="color: var(--maroon);">
                            <i class="fas fa-chess-king"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: var(--maroon);">203rd Emperor</h3>
                        <p class="text-lg text-gray-700 leading-relaxed text-center">
                            The 203rd Emperor of Suryavamsa Surangi Samrajyam, continuing an unbroken lineage of spiritual sovereigns who have guided Hindu civilization through the ages.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="text-5xl mb-4 text-center" style="color: var(--maroon);">
                            <i class="fas fa-dharmachakra"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: var(--maroon);">Mahamandaleshwar</h3>
                        <p class="text-lg text-gray-700 leading-relaxed text-center">
                            Coronated as Mahamandaleshwar of Mahanirvani Akhada and declared as Acharya Mahamandaleshwar of Atal Akhada, the highest spiritual positions in Hindu monasticism.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="text-5xl mb-4 text-center" style="color: var(--maroon);">
                            <i class="fas fa-temple-hindu"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center" style="color: var(--maroon);">Head of 21 Kingdoms</h3>
                        <p class="text-lg text-gray-700 leading-relaxed text-center">
                            The Supreme Pontiff of Hinduism is the spiritual head of 21 ancient indigenous kingdoms of Hinduism, preserving and reviving their sacred traditions.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Spiritual Achievements -->
            <div class="bg-white rounded-2xl shadow-2xl p-12 mb-12">
                <h2 class="text-4xl font-bold mb-8 text-center section-title" style="color: var(--maroon);">Divine Accomplishments</h2>
                <div class="space-y-6">
                    <div class="flex items-start space-x-6 p-6 bg-cream rounded-xl" style="background-color: var(--cream);">
                        <div class="text-4xl flex-shrink-0" style="color: var(--maroon);">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Prolific Author & Teacher</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Authored over 300 books and 10,000 articles in multiple languages (English, Tamil, Hindi), making Him the most prolific spiritual author in modern times. His teachings are the most viewed, read, and watched globally.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-6 p-6 bg-cream rounded-xl" style="background-color: var(--cream);">
                        <div class="text-4xl flex-shrink-0" style="color: var(--maroon);">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Guinness World Records</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Awarded three Guinness World Records: Largest Rope Yoga lesson, Largest Mallakhamba (pole yoga) lesson, and Largest formation of Om symbol - demonstrating the power of collective spiritual practice.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-6 p-6 bg-cream rounded-xl" style="background-color: var(--cream);">
                        <div class="text-4xl flex-shrink-0" style="color: var(--maroon);">
                            <i class="fas fa-award"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Global Recognition</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Honored with over 1,000 letters of commendation and recognition from world leaders, governments, and spiritual organizations for His tireless work in reviving Hindu civilization and serving humanity.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-6 p-6 bg-cream rounded-xl" style="background-color: var(--cream);">
                        <div class="text-4xl flex-shrink-0" style="color: var(--maroon);">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Third Eye Awakening</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Initiated thousands of seekers into Third Eye Awakening, demonstrating supernatural capabilities including blindfolded reading, X-ray vision, and accessing higher states of consciousness.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-6 p-6 bg-cream rounded-xl" style="background-color: var(--cream);">
                        <div class="text-4xl flex-shrink-0" style="color: var(--maroon);">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2" style="color: var(--maroon);">Gurukul Education</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Established the Nithyananda Gurukul, where children receive traditional Vedic education combined with modern knowledge, producing young spiritual leaders with extraordinary capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Three Pillars -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition">
                    <div class="text-6xl mb-6" style="color: var(--maroon);">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Spiritual Master</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Guiding millions of seekers worldwide to enlightenment through authentic ancient Vedic wisdom, yogic sciences, and direct spiritual transmission.
                    </p>
                </div>
                <div class="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition">
                    <div class="text-6xl mb-6" style="color: var(--maroon);">
                        <i class="fas fa-hands-praying"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Cultural Reviver</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Reviving lost Hindu traditions, temple rituals, Vedic practices, and the sacred sciences that form the foundation of Hindu civilization.
                    </p>
                </div>
                <div class="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition">
                    <div class="text-6xl mb-6" style="color: var(--maroon);">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4" style="color: var(--maroon);">Global Humanitarian</h3>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Leading worldwide humanitarian efforts, providing food, education, healthcare, and spiritual guidance to millions in need across continents.
                    </p>
                </div>
            </div>

            <!-- SPH Photo Gallery -->
            <h2 class="text-4xl font-bold text-center mb-8 section-title" style="color: var(--maroon);">Sacred Moments</h2>
            <p class="text-center text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                Witness the divine presence of His Holiness through these sacred images, capturing moments of spiritual transmission, blessings, and divine grace.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                <img src="/images/sph-1.jpg" alt="SPH 1" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-2.jpg" alt="SPH 2" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-3.jpg" alt="SPH 3" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-4.jpg" alt="SPH 4" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-5.jpg" alt="SPH 5" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-6.jpg" alt="SPH 6" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-7.jpg" alt="SPH 7" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-8.jpg" alt="SPH 8" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-9.jpg" alt="SPH 9" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-10.jpg" alt="SPH 10" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
                <img src="/images/sph-11.jpg" alt="SPH 11" class="gallery-image w-full h-64 object-cover rounded-xl shadow-lg">
            </div>

            <!-- Divine Mission & Teachings -->
            <div class="bg-white rounded-2xl shadow-2xl p-12 mb-12">
                <h2 class="text-4xl font-bold mb-8 text-center" style="color: var(--maroon);">Divine Mission & Teachings</h2>
                <div class="space-y-6">
                    <p class="text-xl text-gray-700 leading-relaxed">
                        The Supreme Pontiff of Hinduism has dedicated His entire life to preserving, protecting, and propagating the ancient wisdom of Hindu civilization. Through His divine grace and tireless efforts, millions have experienced profound spiritual awakening, healing, and transformation.
                    </p>
                    <p class="text-xl text-gray-700 leading-relaxed">
                        His teachings encompass the complete spectrum of Hindu spirituality, including advanced yoga sciences, meditation techniques, temple worship traditions, Vedic rituals, and the direct path to enlightenment. His mission is to create a global awakening of higher consciousness and establish a world firmly rooted in spiritual values and enlightened living.
                    </p>
                    <p class="text-xl text-gray-700 leading-relaxed">
                        SPH has revived the science of power manifestation, demonstrating that the extraordinary powers (Shaktis) described in ancient Hindu scriptures are real and can be awakened in sincere seekers. His work includes reviving lost temple traditions, establishing Hindu universities, creating global spiritual embassies, and uniting all sampradayas (Hindu denominations) under one enlightened vision.
                    </p>
                    <p class="text-xl text-gray-700 leading-relaxed">
                        Under His divine guidance, KAILASA has emerged as the beacon of hope for Hindus worldwide, offering a platform for authentic spiritual growth, cultural preservation, and humanitarian service. His vision transcends geographical boundaries, political affiliations, and sectarian divisions, uniting all seekers of truth in their quest for spiritual liberation and enlightened living.
                    </p>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-maroon text-white rounded-2xl shadow-2xl p-12 text-center" style="background: linear-gradient(135deg, var(--maroon), var(--dark-maroon));">
                <h2 class="text-4xl font-bold mb-6" style="font-family: 'Cinzel', serif;">Experience Divine Grace</h2>
                <p class="text-2xl mb-8 max-w-3xl mx-auto">
                    Connect with the Supreme Pontiff of Hinduism through our sacred services and spiritual programs. Receive divine blessings and embark on your journey to enlightenment.
                </p>
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="/services" class="bg-white px-10 py-4 rounded-full text-xl font-semibold inline-block hover:scale-105 transition" style="color: var(--maroon);">
                        <i class="fas fa-hands-praying mr-2"></i>Explore Services
                    </a>
                    <a href="/contact" class="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white transition" style="hover:color: var(--maroon);">
                        <i class="fas fa-envelope mr-2"></i>Contact Us
                    </a>
                </div>
            </div>
        </div>
    </div>
  `;
  
  return c.html(layout('About SPH', content));
});

// Services Page
app.get('/services', (c) => {
  const services = [
    {
      id: 1,
      name: 'Guru Puja',
      image: '/images/guru-puja.jpg',
      description: 'Sacred ceremony to honor and invoke the blessings of the divine guru and spiritual master. This powerful puja establishes a sacred connection with the guru lineage, bringing divine grace and guidance into your life.',
      price: 'Contact for pricing',
      icon: 'fa-hands-praying'
    },
    {
      id: 2,
      name: 'Maheshwara Puja',
      image: '/images/maheshwara-puja.jpg',
      description: 'Divine worship of Lord Shiva (Maheshwara), the supreme consciousness and destroyer of ignorance. This sacred ritual invokes the blessings of Lord Shiva for spiritual transformation, prosperity, and liberation from karmic bondages.',
      price: '$1,008',
      icon: 'fa-om'
    },
    {
      id: 3,
      name: 'Alankara Seva',
      image: '/images/alankara-seva.jpg',
      description: 'Sacred decoration service where the deity is adorned with beautiful ornaments, flowers, and garlands. This devotional seva allows you to participate in beautifying the divine form and receive the blessings of directly serving the deity.',
      price: 'Contact for pricing',
      icon: 'fa-spa'
    },
    {
      id: 4,
      name: 'Abhisheka Seva',
      image: '/images/maheshwara-puja.jpg',
      description: 'Sacred bathing ritual where the Shiva Lingam or deity is bathed with holy water, milk, honey, ghee, and other sacred substances. This powerful ceremony purifies the consciousness and invokes divine blessings for prosperity and spiritual growth.',
      price: 'Contact for pricing',
      icon: 'fa-water'
    },
    {
      id: 5,
      name: 'Archana',
      image: '/images/archana.jpg',
      description: 'Traditional prayer service where the deity is honored with the chanting of sacred names and mantras while offering flowers. Archana creates a powerful spiritual vibration that brings peace, prosperity, and divine grace into your life.',
      price: 'Contact for pricing',
      icon: 'fa-lotus'
    },
    {
      id: 6,
      name: 'Guru Homa',
      image: '/images/guru-puja.jpg',
      description: 'Sacred fire ritual dedicated to the divine guru, invoking the grace and blessings of the spiritual master. This powerful ceremony purifies karma, removes obstacles, and accelerates spiritual progress through the guru\'s divine intervention.',
      price: 'Contact for pricing',
      icon: 'fa-fire'
    },
    {
      id: 7,
      name: 'Rudra Homa',
      image: '/images/rudra-homa.jpg',
      description: 'Powerful fire ritual invoking Lord Rudra (a fierce form of Lord Shiva) for spiritual transformation and divine protection. This ancient Vedic ceremony destroys negative energies, removes obstacles, and bestows powerful spiritual blessings.',
      price: 'Contact for pricing',
      icon: 'fa-fire-alt'
    },
    {
      id: 8,
      name: 'VIP Membership',
      image: '/images/membership.jpg',
      description: 'Exclusive lifetime membership providing privileged access to all spiritual services, programs, and events. Members receive priority darshan, special blessings from the Supreme Pontiff of Hinduism, and participate in exclusive spiritual ceremonies.',
      price: '$1,000,000',
      icon: 'fa-crown'
    }
  ];

  const servicesHTML = services.map(service => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-xl seva-card">
        <div class="relative">
            <img src="${service.image}" alt="${service.name}" class="w-full h-72 object-cover">
            <div class="absolute top-4 right-4 bg-white rounded-full p-4 shadow-lg">
                <i class="fas ${service.icon} text-3xl" style="color: var(--maroon);"></i>
            </div>
        </div>
        <div class="p-8">
            <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">${service.name}</h3>
            <p class="text-gray-700 mb-6 text-lg leading-relaxed">${service.description}</p>
            <div class="flex items-center justify-between">
                <div class="price-tag text-center py-3 px-6 rounded-full text-xl">
                    ${service.price}
                </div>
                <a href="/contact" class="btn-primary text-white px-8 py-3 rounded-full inline-block hover:scale-105 transition">
                    Book Now <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </div>
  `).join('');

  const content = `
    <div class="bg-cream py-16" style="background-color: var(--cream);">
        <div class="container mx-auto px-6">
            <h1 class="text-6xl font-bold text-center mb-4 section-title" style="color: var(--maroon); font-family: 'Cinzel', serif;">
                Sacred Services & Sevas
            </h1>
            <p class="text-center text-2xl text-gray-700 mb-16 max-w-4xl mx-auto">
                Experience the divine through our authentic Vedic rituals and spiritual services. Each seva is performed with sacred mantras and traditional procedures to invoke divine blessings.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                ${servicesHTML}
            </div>

            <div class="mt-16 bg-white rounded-2xl shadow-2xl p-12 text-center">
                <h2 class="text-4xl font-bold mb-6" style="color: var(--maroon);">Need Custom Spiritual Services?</h2>
                <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                    We offer personalized spiritual services tailored to your specific needs and spiritual goals. Contact us to discuss your requirements and we will design a custom program for you.
                </p>
                <a href="/contact" class="btn-primary text-white px-12 py-4 rounded-full text-xl font-semibold inline-block hover:scale-105 transition">
                    <i class="fas fa-envelope mr-2"></i>Contact Us Today
                </a>
            </div>
        </div>
    </div>
  `;
  
  return c.html(layout('Services', content));
});

// Contact Page
app.get('/contact', (c) => {
  const content = `
    <div class="container mx-auto px-6 py-20">
        <h1 class="text-6xl font-bold text-center mb-6 section-title" style="color: var(--maroon); font-family: 'Cinzel', serif;">Contact Us</h1>
        <p class="text-center text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We would love to hear from you. Reach out to us for any inquiries about our services, programs, or spiritual guidance.
        </p>
        
        <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition">
                    <div class="text-6xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Email Us</h3>
                    <p class="text-gray-700 text-lg">info@uskailasaliberia.org</p>
                </div>
                <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition">
                    <div class="text-6xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Call Us</h3>
                    <p class="text-gray-700 text-lg">Coming Soon</p>
                </div>
                <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition">
                    <div class="text-6xl mb-4" style="color: var(--maroon);">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3" style="color: var(--maroon);">Visit Us</h3>
                    <p class="text-gray-700 text-lg">Liberia, West Africa</p>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-2xl p-12">
                <h2 class="text-4xl font-bold mb-8 text-center" style="color: var(--maroon);">Send Us a Message</h2>
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-lg font-semibold mb-2" style="color: var(--maroon);">Full Name *</label>
                            <input type="text" required class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-maroon text-lg" style="border-color: var(--beige);">
                        </div>
                        <div>
                            <label class="block text-lg font-semibold mb-2" style="color: var(--maroon);">Email Address *</label>
                            <input type="email" required class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-maroon text-lg" style="border-color: var(--beige);">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-lg font-semibold mb-2" style="color: var(--maroon);">Phone Number</label>
                            <input type="tel" class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-maroon text-lg" style="border-color: var(--beige);">
                        </div>
                        <div>
                            <label class="block text-lg font-semibold mb-2" style="color: var(--maroon);">Service Interest</label>
                            <select class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-maroon text-lg" style="border-color: var(--beige);">
                                <option>Select a service</option>
                                <option>Guru Puja</option>
                                <option>Maheshwara Puja</option>
                                <option>Alankara Seva</option>
                                <option>Abhisheka Seva</option>
                                <option>Archana</option>
                                <option>Guru Homa</option>
                                <option>Rudra Homa</option>
                                <option>VIP Membership</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-2" style="color: var(--maroon);">Message *</label>
                        <textarea required rows="6" class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-maroon text-lg" style="border-color: var(--beige);" placeholder="Please share your inquiry or requirements..."></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn-primary text-white px-12 py-4 rounded-full text-xl font-semibold inline-block hover:scale-105 transition">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div class="mt-12 bg-cream rounded-2xl p-10 text-center" style="background-color: var(--cream);">
                <h3 class="text-3xl font-bold mb-4" style="color: var(--maroon);">Connect With Us</h3>
                <p class="text-xl text-gray-700 mb-6">Follow us on social media for updates on our programs and spiritual activities</p>
                <div class="flex justify-center space-x-6 text-4xl">
                    <a href="#" class="hover:scale-110 transition" style="color: var(--maroon);">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="hover:scale-110 transition" style="color: var(--maroon);">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="hover:scale-110 transition" style="color: var(--maroon);">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="hover:scale-110 transition" style="color: var(--maroon);">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  `;
  
  return c.html(layout('Contact Us', content));
});

export default app
