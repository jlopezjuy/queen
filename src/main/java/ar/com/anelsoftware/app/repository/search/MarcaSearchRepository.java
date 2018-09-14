package ar.com.anelsoftware.app.repository.search;

import ar.com.anelsoftware.app.domain.Marca;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Marca entity.
 */
public interface MarcaSearchRepository extends ElasticsearchRepository<Marca, Long> {
}
