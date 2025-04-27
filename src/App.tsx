import React, { useState, useEffect, useRef } from 'react';
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
  Drawer,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
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
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    setDrawerOpen(false); // Close the drawer after a selection
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

        {/* AppBar */}
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'black', zIndex: 10 }}>
          <Toolbar sx={{ minHeight: 80 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Jidnya Mahajan
            </Typography>

            {/* Hamburger Menu Icon for Mobile */}
            <IconButton
              sx={{ color: 'white', display: { xs: 'block', sm: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              <Button sx={{ color: 'white' }} onClick={() => scrollToSection(homeRef)}>
                Home
              </Button>
              <Button sx={{ color: 'white' }} onClick={() => scrollToSection(aboutRef)}>
                About
              </Button>
              <Button sx={{ color: 'white' }} onClick={() => scrollToSection(portfolioRef)}>
                Portfolio
              </Button>
              <Button sx={{ color: 'white' }} onClick={() => scrollToSection(contactRef)}>
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250, padding: 2 }}>
            <Button sx={{ color: 'black', width: '100%' }} onClick={() => scrollToSection(homeRef)}>
              Home
            </Button>
            <Button sx={{ color: 'black', width: '100%' }} onClick={() => scrollToSection(aboutRef)}>
              About
            </Button>
            <Button sx={{ color: 'black', width: '100%' }} onClick={() => scrollToSection(portfolioRef)}>
              Portfolio
            </Button>
            <Button sx={{ color: 'black', width: '100%' }} onClick={() => scrollToSection(contactRef)}>
              Contact
            </Button>
          </Box>
        </Drawer>

        {/* Spacer to avoid AppBar overlap */}
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
        sx={{ border: 'none',
          width: { xs: '100%', sm: 'auto' },
        }}
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
  <Container 
    maxWidth="md" 
    sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, // 👉 Stack vertically on small screens (xs), side-by-side on medium (md) and above
      alignItems: 'center', 
      textAlign: { xs: 'center', md: 'left' } // 👉 Center align text on mobile
    }}
  >
    {/* Left Section - Description */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" data-aos="fade-right">
        About Me
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ fontSize: '1.1rem', color: '#555' }} 
        data-aos="fade-up"
      >
        A Full Stack Developer specializing in modern web technologies. My journey includes building real-time 
        applications, integrating APIs, and working across the full software development lifecycle — from 
        database design to frontend implementation.
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ fontSize: '1.1rem', color: '#555' }} 
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
          mt: 3,
          backgroundColor: 'black', 
          color: 'white',            
          '&:hover': {
            backgroundColor: '#333', 
          },
        }}
        data-aos="fade-right"
      >
        Download CV
      </Button>
    </Box>

    {/* Right Section - Photo */}
    <Box 
      sx={{ 
        flexShrink: 0, 
        ml: { xs: 0, md: 4 }, // 👉 No left margin on mobile
        mt: { xs: 4, md: 0 }  // 👉 Add top margin on mobile to create space between text and image
      }} 
      data-aos="zoom-in"
    >
      <img
        src="nice.jpg" // replace with your photo
        alt="Your Name"
        style={{
          width: 250,
          height: 250,
          borderRadius: '50%',
          objectFit: 'cover',
          margin: '0 auto', // 👉 Center image on mobile
          display: 'block', // 👉 To allow margin auto
        }}
      />
    </Box>
  </Container>
</Box>


{/* Button to toggle between Tech Stack and Certifications */}
<Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row', // ✨ Always keep it row on all screen sizes
      flexWrap: { xs: 'wrap', sm: 'nowrap' }, // ✨ Wrap if very tight screen
      width: 'auto',
      backgroundColor: '#fff',
      borderRadius: '4px',
      border: '1px solid #000',
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
        padding: '10px 20px', // ✨ Wider padding for better tap area
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        borderRight: '1px solid #000', // ✨ Divider between buttons
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
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      Certifications
    </Box>
  </Box>
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
            px: { xs: 4, md: 6 }, // Button padding left-right
            py: { xs: 1, md: 1.5 }, // Button padding top-bottom
            fontSize: { xs: '0.9rem', md: '1rem' },
            '&:hover': {
              bgcolor: '#333', // Slight color change on hover
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
