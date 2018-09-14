package ar.com.anelsoftware.app.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of MarcaSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class MarcaSearchRepositoryMockConfiguration {

    @MockBean
    private MarcaSearchRepository mockMarcaSearchRepository;

}
