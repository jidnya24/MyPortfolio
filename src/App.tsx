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
    paddingTop: { xs: '60px', md: '80px' }, //responsive
    paddingX: { xs: 2, md: 0 }, //responsive
  }} ref={homeRef}
>
  <Container maxWidth="md">
    <Typography
      variant="h2"
      gutterBottom
      sx={{ mb: 3, 
        fontSize: { xs: '2rem', md: '3rem' }, //responsive
        textAlign: { xs: 'center', md: 'left' }, //responsive
       }}
      data-aos="fade-right"
      data-aos-delay="0"
    >

      Hello World, I'm Jidnya. <br />Welcome to My Portfolio!
    </Typography>
    <Typography
      variant="h5"
      sx={{ mb: 4, 
        color: '#666',
        fontSize: { xs: '1.1rem', md: '1.5rem' }, //respinsive
        textAlign: { xs: 'center', md: 'left' },
      }}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      Let’s Dive Into My World of Code and Creativity :)
    </Typography>

    {/* Animated Buttons */}
    <Box sx={{ display: 'flex', 
      gap: 2,
      flexDirection: { xs: 'column', sm: 'row' }, // responsive
      justifyContent: { xs: 'center', sm: 'flex-start' }, //responsive
      alignItems: 'center', }}>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<Github />}
        href="https://github.com/jidnya24"
        target="_blank"
        sx={{ border: 'none', 
          width: { xs: '100%', sm: 'auto' }, //responsive
         }}
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        GitHub
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<Linkedin />}
        href="https://www.linkedin.com/in/jidnya-mahajan-7405491b1/"
        target="_blank"
        sx={{ border: 'none',
          width: { xs: '100%', sm: 'auto' },
        }}
        data-aos="fade-left"
        data-aos-delay="2000"
      >
        LinkedIn
      </Button>
    </Box>
  </Container>
</Box>

{/* About Section */}
<Box sx={{ py: 12, borderBottom: '1px solid #eee' }} ref={aboutRef}>
  <Container 
    maxWidth="md" 
    sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center', 
      textAlign: { xs: 'center', md: 'left' } 
    }}
  >

    {/* Left Section - Description */}
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Heading */}
      <Typography 
        variant="h3" 
        sx={{ order: { xs: 1, md: 1 } }}
        data-aos="fade-right"
      >
        About Me
      </Typography>

      {/* Right Section - Photo */}
      <Box 
        sx={{ 
          flexShrink: 0, 
          order: { xs: 2, md: 2 }, 
          ml: { xs: 0, md: 4 },
          mt: { xs: 3, md: 0 },
          mb: { xs: 3, md: 0 },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' }
        }} 
        data-aos="zoom-in"
      >
        <img
          src="nice.jpg"
          alt="Your Name"
          style={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Text Paragraphs */}
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          order: { xs: 3, md: 3 }, 
          fontSize: '1.1rem', 
          color: '#555' 
        }} 
        data-aos="fade-up"
      >
        A Full Stack Developer specializing in modern web technologies. My journey includes building real-time 
        applications, integrating APIs, and working across the full software development lifecycle — from 
        database design to frontend implementation.
      </Typography>

      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          order: { xs: 4, md: 4 }, 
          fontSize: '1.1rem', 
          color: '#555' 
        }} 
        data-aos="fade-up"
      >
        If you’re looking for a dedicated and adaptable developer to bring your ideas to life, feel free to reach out!
      </Typography>

      {/* Button to Download CV */}
      <Button
        variant="contained"
        color="inherit"
        component="a"
        href="Jidnya_Mahajan_CV.pdf"
        download
        sx={{
          order: { xs: 5, md: 5 },
          mt: 3,
          backgroundColor: 'black',
          color: 'white',
          alignSelf: { xs: 'center', md: 'flex-start' }, // 👉 Center button on mobile
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
        data-aos="fade-right"
      >
        Download CV
      </Button>

    </Box>

  </Container>
</Box>

{/* Portfolio Section */}
<Box sx={{ py: 12, borderBottom: '1px solid #eee' }} data-aos="fade-right" ref={portfolioRef}>
  <Container maxWidth="md">
    <Typography 
      variant="h3" 
      data-aos="zoom-in" 
      sx={{ textAlign: 'center', mb: 4 }}
    >
      Portfolio Showcase
    </Typography>

    {/* Button to toggle between Tech Stack and Certifications */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column' }, // 👉 Stack toggle buttons vertically on mobile
          width: { xs: '100%', sm: 'auto' },
          backgroundColor: '#fff',
          borderRadius: '4px',
          border: '1px solid #000',
          overflow: 'hidden',
        }}
      >
        <Box
          onClick={() => setSelectedCategory('techStack')}
          sx={{
            width: '550px', 
            backgroundColor: selectedCategory === 'techStack' ? '#000' : '#fff',
            color: selectedCategory === 'techStack' ? '#fff' : '#000',
            textAlign: 'center',
            padding: '12px 0',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            borderBottom: { xs: selectedCategory === 'techStack' ? '2px solid #000' : 'none', sm: 'none' }, // 👉 Add border effect on mobile
          }}
        >
          Tech Stack
        </Box>
        <Box
          onClick={() => setSelectedCategory('certifications')}
          sx={{
            width: '550px', 
            backgroundColor: selectedCategory === 'certifications' ? '#000' : '#fff',
            color: selectedCategory === 'certifications' ? '#fff' : '#000',
            textAlign: 'center',
            padding: '10px 0',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            borderTop: { xs: selectedCategory === 'certifications' ? '2px solid #000' : 'none', sm: 'none' },
          }}
        >
          Certifications
        </Box>
      </Box>
    </Box>

    {/* Container for Tech Stack and Certifications */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      
      {/* Tech Stack Section */}
      {selectedCategory === 'techStack' && (
        <Box>
          <Grid container spacing={4}>
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
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.name}
                    sx={{
                      width: { xs: 60, sm: 80 }, // 👉 Smaller logo on mobile
                      height: { xs: 60, sm: 80 },
                      mb: 2,
                      objectFit: 'contain',
                    }}
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
        <Box>
          <Grid container spacing={4}>
            {[
              { certImage: 'Software_Trainee.png' },
              { certImage: 'software_developer.png' },
              { certImage: 'Udemy_SQL.jpg' },
              { certImage: 'Jidnya Mahajan.png' },
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={2} sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={cert.certImage}
                        alt={`Certification ${index + 1}`}

                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          objectFit: 'contain',
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
<Box sx={{ py: { xs: 6, md: 12 } }} data-aos="fade-right" ref={contactRef}>
  <Container maxWidth="sm"> {/* Smaller maxWidth for better mobile view */}
    <Typography
      variant="h3"
      sx={{
        textAlign: 'center',
        fontSize: { xs: '2rem', md: '3rem' }, // Adjust font size for mobile
        mb: { xs: 4, md: 6 }, // Margin bottom responsive
      }}
    >
      Contact Me
    </Typography>

    <form onSubmit={handleFormSubmit}>
      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </Box>

      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </Box>

      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          name="message"
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
          sx={{
            bgcolor: 'black',
            color: 'white',
            px: { xs: 2, md: 3 }, // 🔻 Decreased left-right padding
            py: { xs: 0.5, md: 1 }, // 🔻 Decreased top-bottom padding
            fontSize: { xs: '0.75rem', md: '0.9rem' }, // 🔻 Smaller font size
            minWidth: { xs: '80px', md: '100px' }, // 🔻 Optional: Set minimum width
            minHeight: { xs: '30px', md: '40px' }, // 🔻 Optional: Set minimum height
            '&:hover': {
              bgcolor: '#333',
            },
          }}
          
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
    py: { xs: 3, md: 4 }, // Adjusted padding for smaller screens
    mt: 6,
    borderTop: '1px solid #444',
  }}
>
  <Container maxWidth="md">
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
      <Grid item xs={12} sm={6}>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile
          }}
        >
          © {new Date().getFullYear()} Jidnya Mahajan. All rights reserved.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' }, // Center icons on mobile
            gap: 2,
            mt: { xs: 2, sm: 0 }, // Add top margin on mobile for spacing
          }}
        >
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
