package br.com.runner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import br.com.core.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import static br.com.core.DriverFactory.getDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
				glue = { "br.com.steps" }, 
				features = {"src/test/java/br/com/features/" }, 
				monochrome = true, 
				plugin = { "pretty","html:Reports/cucumber" }, 
				tags = { "@pesquisa-teste" }
				)

//Runner Para Rodar os Testes
public class Runner {
	
	@AfterClass
	public static void encerraDriver() {
		DriverFactory.driver.close();
	}

}
