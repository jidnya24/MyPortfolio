import React, { useState, useEffect, useRef} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import {
  AppBar,
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Toolbar,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { Github, Mail, Linkedin } from 'lucide-react';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      marginBottom: '2rem',
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('techStack');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_arlz1fc', 'template_zhuq869', e.target, 'Yi_5bV_QxCXLb3bHX')
    .then(
      (result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Error sending message!');
      }
    );
  setFormData({ name: '', email: '', message: '' }); // Clear form after submission
};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: 'white' }}>
        {/* Blurry pastel background blobs */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -2,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, #fcb6c2, transparent)',
              top: 50,
              left: 100,
              filter: 'blur(120px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, #add8ff, transparent)',
              top: 300,
              right: 100,
              filter: 'blur(120px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, #fff5ba, transparent)',
              bottom: 100,
              left: 200,
              filter: 'blur(120px)',
            }}
          />
        </Box>

        <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'black', zIndex: 10 }}>
          <Toolbar sx={{ minHeight:80}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Jidnya Mahajan
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
    <Button sx={{ color: 'white' }} onClick={() => scrollToSection(homeRef)}>Home</Button>
    <Button sx={{ color: 'white' }} onClick={() => scrollToSection(aboutRef)}>About</Button>
    <Button sx={{ color: 'white' }} onClick={() => scrollToSection(portfolioRef)}>Portfolio</Button>
    <Button sx={{ color: 'white' }} onClick={() => scrollToSection(contactRef)}>Contact</Button>
  </Box>
          </Toolbar>
        </AppBar>
        
        <Toolbar />

      {/* Home Section */}
<Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'white',
    color: '#333',
    borderBottom: '1px solid #eee',
    paddingTop: '80px',
  }} ref={homeRef}
>
  <Container maxWidth="md">
    <Typography
      variant="h2"
      gutterBottom
      sx={{ mb: 3 }}
      data-aos="fade-right"
      data-aos-delay="0"
    >

      Hello Worrrrrrrld, I'm Jidnya. <br />Welcome to My Portfolio!
    </Typography>
    <Typography
      variant="h5"
      sx={{ mb: 4, color: '#666' }}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      Let’s Dive Into My World of Code and Creativity :)
    </Typography>

    {/* Animated Buttons */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<Github />}
        href="https://github.com/jidnya24"
        target="_blank"
        sx={{ border: 'none' }}
        data-aos="fade-right"
        data-aos-delay="2000"
      >
        GitHub
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<Linkedin />}
        href="https://www.linkedin.com/in/jidnya-mahajan-7405491b1/"
        target="_blank"
        sx={{ border: 'none' }}
        data-aos="fade-left"
        data-aos-delay="3000"
      >
        LinkedIn
      </Button>
    </Box>
  </Container>
</Box>

        {/* About Section */}
<Box sx={{ py: 12, borderBottom: '1px solid #eee' }} ref={aboutRef}>
  <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center' }}>
    {/* Left Section - Description */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" data-aos="fade-right">
        About Me
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: '#555' }} data-aos="fade-up">
        A Full Stack Developer specializing in modern web technologies. My journey includes building real-time 
        applications, integrating APIs, and working across the full software development lifecycle — from 
        database design to frontend implementation.


        
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: '#555' }} data-aos="fade-up">
      If you’re looking for a dedicated and adaptable developer to bring your ideas to life, feel free to reach out!
      </Typography>
      
      {/* Button to Download CV */}
      <Button
  variant="contained"
  color="inherit"
  component="a"
  href="Jidnya_Mahajan_Resume.pdf"
  download
  sx={{
    mt: 3,
    backgroundColor: 'black', 
    color: 'white',            
    '&:hover': {
      backgroundColor: '#333', 
    },
  }} data-aos="fade-right"
>
  Download CV
</Button>
    </Box>

    {/* Right Section - Photo */}
    <Box sx={{ flexShrink: 0, ml: 4 }} data-aos="zoom-in">
      <img
        src="nice.jpg" // replace with the photo you upload
        alt="Your Name"
        style={{
          width: 250,
          height: 250,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Container>
</Box>

{/* Portfolio Section */}
<Box sx={{ py: 12, borderBottom: '1px solid #eee' }} data-aos="fade-right" ref={portfolioRef}>
  <Container maxWidth="md">
    <Typography variant="h3" data-aos="zoom-in" sx={{ textAlign: 'center' }}>
      Portfolio Showcase
    </Typography>

    {/* Button to toggle between Tech Stack and Certifications */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#fff', // Background is white by default
          borderRadius: '4px', // Sharp corners
          border: '1px solid #000', // Thin black border
          overflow: 'hidden',
        }}
      >
        <Box
          onClick={() => setSelectedCategory('techStack')}
          sx={{
            flex: 1,
            backgroundColor: selectedCategory === 'techStack' ? '#000' : '#fff', 
            color: selectedCategory === 'techStack' ? '#fff' : '#000', 
            textAlign: 'center',
            padding: '10px 0',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s', 
          }}
        >
          Tech Stack
        </Box>
        <Box
          onClick={() => setSelectedCategory('certifications')}
          sx={{
            flex: 1,
            backgroundColor: selectedCategory === 'certifications' ? '#000' : '#fff', 
            color: selectedCategory === 'certifications' ? '#fff' : '#000', 
            textAlign: 'center',
            padding: '10px 0',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Certifications
        </Box>
      </Box>
    </Box>

    {/* Container for Tech Stack and Certifications */}
    <Box sx={{ display: 'flex', gap: 4 }}>
    {/* Tech Stack Section */}
{selectedCategory === 'techStack' && (
  <Box sx={{ flex: 1 }}>
    <Grid container spacing={8}> 
      {[
        { name: 'HTML', logo: 'html.png', from: 'left' },
        { name: 'CSS', logo: 'css.jpeg', from: 'left' },
        { name: 'JS', logo: 'js.png', from: 'right' },
        { name: 'ReactJS', logo: 'react.png', from: 'right' },
        { name: 'Material UI', logo: 'materialUI.png', from: 'left' },
        { name: 'Java', logo: 'java.png', from: 'left' },
        { name: 'Spring Boot', logo: 'springboot.png', from: 'right' },
        { name: 'C#', logo: 'csharp.png', from: 'right' },
        { name: 'Entity Framework', logo: 'ef.png', from: 'left' },
        { name: 'ASP.NET', logo: 'asp.net.jpeg', from: 'left' },
        { name: 'MySQL', logo: 'mysql.png', from: 'right' },
        { name: 'GitHub', logo: 'github.png', from: 'right' },
      ].map((tech, index) => (
        <Grid item xs={6} sm={3} key={tech.name}>
          <Box
            data-aos={tech.from === 'left' ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 100}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)', // Subtle scale effect on hover
              },
            }}
          >
            <Box
              component="img"
              src={tech.logo}
              alt={tech.name}
              sx={{ 
                width: 80, height: 80, mb: 2 , 
                height: tech.name === 'Java' ? 100 : 80,
                height: tech.name === 'CSS' ? 90 : 80,
                width: tech.name === 'CSS' ? 130 : 90,
                height: tech.name === 'JS' ? 90 : 80,
                width: tech.name === 'JS' ? 90 : 80,
                height: tech.name === 'Entity Framework' ? 90 : 80,
                width: tech.name === 'Entity Framework' ? 110 : 80,
                
                
              }} // Increased size of logos
            />
            <Typography variant="body2">{tech.name}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
)}


      {/* Certifications Section */}
      {selectedCategory === 'certifications' && (
        <Box sx={{ flex: 1 }}>
          <Grid container spacing={3}>
            {[
              {
                certImage: 'Software_Trainee.png',
              },
              {
                certImage: 'software_developer.png', // Image path
              },
              {
                certImage: 'Udemy_SQL.jpg', // Image path
              },
              {
                certImage: 'Jidnya Mahajan.png', // Image path  // Image path
              },
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    {/* Display only the image of the certification */}
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={cert.certImage} // Image source
                        alt={`Certification ${index + 1}`}
                        style={{
                          width: '100%',  // Adjust the width as needed
                          height: 'auto', // Maintain aspect ratio
                          borderRadius: '8px', // Optional, for rounded corners
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  </Container>
</Box>


       {/* Contact Section */}
       <Box sx={{ py: 12 }} data-aos="fade-right" ref={contactRef}>
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Contact Me
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <Box sx={{ mb: 3 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name" // Add the name attribute here
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email" // Add the name attribute here
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message" // Add the name attribute here
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ bgcolor: 'black', color: 'white' }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Container>
        </Box>
        {/* Footer */}
<Box
  component="footer"
  sx={{
    backgroundColor: 'black',
    color: 'white',
    py: 4,
    mt: 6,
    borderTop: '1px solid #444',
  }}
>
  <Container maxWidth="md">
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
      <Grid item xs={12} sm={6}>
        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Jidnya Mahajan. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 2 }}>
          <a href="https://github.com/jidnya24" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            <Github size={20} />
          </a>
          <a href="mailto:jidnyamahajan2002@gmail.com" style={{ color: 'white' }}>
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jidnya-mahajan-7405491b1/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            <Linkedin size={20} />
          </a>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;
